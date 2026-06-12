import SwiftUI

struct ColorPalette {
    let bg: [Color]
    let text: [Color]
}

struct QuoteView: View {
    let quote: Quote
    let palette: ColorPalette
    
    @State private var rotation: CGSize = .zero
    @State private var isMoving = false
    @State private var showMetadata = false
    
    var body: some View {
        ZStack {
            // Card Content
            VStack(spacing: 20) {
                Text("\"")
                    .font(.system(size: 60, weight: .bold, design: .serif))
                    .foregroundColor(.white.opacity(0.3))
                
                Text(quote.text)
                    .font(.system(size: 24, weight: .semibold, design: .default))
                    .multilineTextAlignment(.center)
                    .foregroundStyle(
                        LinearGradient(
                            colors: palette.text,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .padding(.horizontal)
                    .frame(minHeight: 120) // Consistent height for text area
                
                VStack(spacing: 5) {
                    Text(quote.movie)
                        .font(.headline)
                        .fontWeight(.medium)
                        .textCase(.uppercase)
                        .tracking(1)
                        .foregroundColor(.white.opacity(0.9))
                    
                    Text(String(quote.year))
                        .font(.subheadline)
                        .foregroundColor(.white.opacity(0.7))
                }
                .padding(.top, 10)
                .opacity(showMetadata ? 1 : 0)
                .animation(.easeIn(duration: 0.8).delay(2.0), value: showMetadata)
            }
            .padding(40)
            .frame(width: 320, height: 450) // Fixed card size
            .background(
                // Very transparent background
                Rectangle()
                    .fill(.ultraThinMaterial)
                    .opacity(0.1)
            )
            .cornerRadius(20)
            .overlay(
                RoundedRectangle(cornerRadius: 20)
                    .stroke(.white.opacity(0.3), lineWidth: 2)
            )
            // Particles overlay - OUTSIDE cornerRadius to allow overflow
            .overlay(
                ParticleEffect(
                    rotateX: rotation.height / 10,
                    rotateY: rotation.width / 10,
                    isMoving: isMoving,
                    emitterSize: CGSize(width: 320, height: 450) // Card size
                )
                .frame(width: 600, height: 800)
                .allowsHitTesting(false)
            )
            .shadow(color: Color(red: 0.12, green: 0.15, blue: 0.53).opacity(0.3), radius: 20, x: 0, y: 10)
            .compositingGroup() // Stabilize rendering before 3D transform
            .rotation3DEffect(
                .degrees(Double(rotation.width / 10)),
                axis: (x: 0, y: 1, z: 0)
            )
            .rotation3DEffect(
                .degrees(Double(-rotation.height / 10)),
                axis: (x: 1, y: 0, z: 0)
            )
            .gesture(
                DragGesture()
                    .onChanged { value in
                        isMoving = true
                        withAnimation(.interactiveSpring) {
                            rotation = value.translation
                        }
                    }
                    .onEnded { _ in
                        isMoving = false
                        withAnimation(.spring) {
                            rotation = .zero
                        }
                    }
            )
            .onAppear {
                showMetadata = true
            }
        }
    }
}

#Preview {
    ZStack {
        Color.black
        QuoteView(
            quote: Quote(id: 1, text: "Here's looking at you, kid.", movie: "Casablanca", year: 1942),
            palette: ColorPalette(
                bg: [.blue, .purple],
                text: [.pink, .orange]
            )
        )
    }
}
