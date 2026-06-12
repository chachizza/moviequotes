import SwiftUI

struct Particle: Identifiable {
    let id = UUID()
    var x: Double
    var y: Double
    var z: Double
    var vx: Double
    var vy: Double
    var vz: Double
    var size: Double
    var life: Double
    var maxLife: Double
    var glow: Double
}

struct ParticleEffect: View {
    var rotateX: Double
    var rotateY: Double
    var isMoving: Bool
    var emitterSize: CGSize // Size of the emitting area (card size)
    
    @State private var particles: [Particle] = []
    @State private var lastUpdate = Date()
    
    var body: some View {
        TimelineView(.animation) { timeline in
            Canvas { context, size in
                let now = timeline.date.timeIntervalSinceReferenceDate
                
                for particle in particles {
                    let opacity = particle.life * particle.glow
                    if opacity > 0 {
                        let scale = 1 + particle.z / 500
                        let currentSize = particle.size * scale
                        
                        // Glow
                        let glowRect = CGRect(
                            x: particle.x - currentSize * 1.5,
                            y: particle.y - currentSize * 1.5,
                            width: currentSize * 3,
                            height: currentSize * 3
                        )
                        
                        // Core
                        let coreRect = CGRect(
                            x: particle.x - currentSize,
                            y: particle.y - currentSize,
                            width: currentSize * 2,
                            height: currentSize * 2
                        )
                        
                        context.opacity = opacity
                        context.fill(Path(ellipseIn: coreRect), with: .color(.white))
                        
                        context.opacity = opacity * 0.4
                        context.fill(Path(ellipseIn: glowRect), with: .color(Color(red: 0.8, green: 0.6, blue: 1.0)))
                    }
                }
            }
            .onChange(of: timeline.date) { _ in
                updateParticles(in: CGSize(width: 600, height: 800))
            }
        }
    }
    
    private func updateParticles(in size: CGSize) {
        // Spawn particles
        if isMoving && particles.count < 150 { // Increased max count
            if Double.random(in: 0...1) > 0.1 { // Increased spawn rate
                spawnParticle(in: size)
            }
        }
        
        // Update existing particles
        particles = particles.compactMap { particle in
            var p = particle
            
            p.x += p.vx
            p.y += p.vy
            p.z += p.vz
            
            p.life -= 1.0 / p.maxLife
            p.vy += 0.02 // Gravity
            
            return p.life > 0 ? p : nil
        }
    }
    
    private func spawnParticle(in size: CGSize) {
        let rotationMagnitude = sqrt(rotateX * rotateX + rotateY * rotateY)
        let velocityMultiplier = rotationMagnitude / 40.0
        
        // Calculate offset to center the emitter within the canvas
        let offsetX = (size.width - emitterSize.width) / 2
        let offsetY = (size.height - emitterSize.height) / 2
        
        // Random edge position
        let edge = Int.random(in: 0...3)
        var x: Double = 0
        var y: Double = 0
        
        switch edge {
        case 0: // Left
            x = offsetX
            y = offsetY + Double.random(in: 0...emitterSize.height)
        case 1: // Right
            x = offsetX + emitterSize.width
            y = offsetY + Double.random(in: 0...emitterSize.height)
        case 2: // Top
            x = offsetX + Double.random(in: 0...emitterSize.width)
            y = offsetY
        case 3: // Bottom
            x = offsetX + Double.random(in: 0...emitterSize.width)
            y = offsetY + emitterSize.height
        default: break
        }
        
        let particle = Particle(
            x: x,
            y: y,
            z: Double.random(in: -100...100),
            vx: (Double.random(in: -0.5...0.5) * 0.8 * velocityMultiplier) + (rotateY * 0.08),
            vy: (Double.random(in: -0.5...0.5) * 0.8 * velocityMultiplier) - (rotateX * 0.08),
            vz: Double.random(in: -0.2...0.2),
            size: Double.random(in: 2.0...4.5), // Increased size
            life: 1.0,
            maxLife: Double.random(in: 60...150),
            glow: Double.random(in: 0.7...1.0) // Increased glow/opacity
        )
        
        particles.append(particle)
    }
}
