import SwiftUI

struct ContentView: View {
    @State private var currentQuote: Quote?
    @State private var currentPalette: ColorPalette?
    @State private var activeCategory: QuoteCategory = .all
    @State private var isTransitioning = false

    let palettes: [ColorPalette] = [
        ColorPalette(bg: [Color(hex: "1a1a2e"), Color(hex: "16213e"), Color(hex: "0f3460")], text: [Color(hex: "ff9a9e"), Color(hex: "fad0c4")]),
        ColorPalette(bg: [Color(hex: "2d4059"), Color(hex: "334756"), Color(hex: "2d4059")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "2c3e50"), Color(hex: "34495e"), Color(hex: "2c3e50")], text: [Color(hex: "fab1a0"), Color(hex: "ff7675")]),
        ColorPalette(bg: [Color(hex: "1e3a5f"), Color(hex: "2a5298"), Color(hex: "1e3a5f")], text: [Color(hex: "a29bfe"), Color(hex: "6c5ce7")]),
        ColorPalette(bg: [Color(hex: "2b4162"), Color(hex: "385f71"), Color(hex: "2b4162")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "5f27cd"), Color(hex: "7b3ff2"), Color(hex: "5f27cd")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "c44569"), Color(hex: "d55a7a"), Color(hex: "c44569")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "8e44ad"), Color(hex: "a569bd"), Color(hex: "8e44ad")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "0984e3"), Color(hex: "2d98da"), Color(hex: "0984e3")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "00b894"), Color(hex: "26d0a8"), Color(hex: "00b894")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "3498db"), Color(hex: "5dade2"), Color(hex: "3498db")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "e17055"), Color(hex: "e88873"), Color(hex: "e17055")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "fd79a8"), Color(hex: "fd93b8"), Color(hex: "fd79a8")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "f39c12"), Color(hex: "f5b041"), Color(hex: "f39c12")], text: [Color(hex: "2d3436"), Color(hex: "636e72")]),
        ColorPalette(bg: [Color(hex: "e74c3c"), Color(hex: "ec7063"), Color(hex: "e74c3c")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "c0392b"), Color(hex: "cd6155"), Color(hex: "c0392b")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "d63031"), Color(hex: "e55353"), Color(hex: "d63031")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "27ae60"), Color(hex: "52be80"), Color(hex: "27ae60")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "00cec9"), Color(hex: "33d9d5"), Color(hex: "00cec9")], text: [Color(hex: "2d3436"), Color(hex: "636e72")]),
        ColorPalette(bg: [Color(hex: "3d2c5c"), Color(hex: "4a3f6b"), Color(hex: "3d2c5c")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "2b5876"), Color(hex: "3d6a85"), Color(hex: "2b5876")], text: [Color(hex: "fab1a0"), Color(hex: "ff7675")]),
        ColorPalette(bg: [Color(hex: "314755"), Color(hex: "3e5c6e"), Color(hex: "314755")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "6c5ce7"), Color(hex: "8b7ff5"), Color(hex: "6c5ce7")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")]),
        ColorPalette(bg: [Color(hex: "ff6b6b"), Color(hex: "ff8787"), Color(hex: "ff6b6b")], text: [Color(hex: "ffeaa7"), Color(hex: "fdcb6e")])
    ]

    private var filteredQuotes: [Quote] {
        filterQuotes(quotes, by: activeCategory)
    }

    var body: some View {
        ZStack {
            // Background
            if let palette = currentPalette {
                RadialGradient(
                    colors: palette.bg,
                    center: .center,
                    startRadius: 0,
                    endRadius: 1400
                )
                .ignoresSafeArea()
                .animation(.easeInOut(duration: 1.0), value: palette.bg)
            } else {
                Color.black.ignoresSafeArea()
            }

            RadialGradient(
                colors: [Color.white.opacity(0.1), .clear],
                center: .center,
                startRadius: 0,
                endRadius: UIScreen.main.bounds.width * 0.8
            )
            .ignoresSafeArea()

            // Content
            VStack(spacing: 0) {
                // Filter chips
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 10) {
                        ForEach(QuoteCategory.allCases, id: \.self) { category in
                            Button(action: {
                                withAnimation(.spring(response: 0.4, dampingFraction: 0.7)) {
                                    activeCategory = category
                                    pickRandomQuote(avoiding: currentQuote)
                                }
                            }) {
                                Text(category.rawValue)
                                    .font(.system(size: 13, weight: .medium))
                                    .padding(.vertical, 6)
                                    .padding(.horizontal, 14)
                                    .background(
                                        activeCategory == category
                                            ? Color.white.opacity(0.18)
                                            : Color.black.opacity(0.25)
                                    )
                                    .foregroundColor(
                                        activeCategory == category
                                            ? .white
                                            : Color.white.opacity(0.8)
                                    )
                                    .overlay(
                                        Capsule()
                                            .stroke(
                                                activeCategory == category
                                                    ? Color.white.opacity(0.4)
                                                    : Color.white.opacity(0.12),
                                                lineWidth: 1
                                            )
                                    )
                                    .clipShape(Capsule())
                            }
                        }
                    }
                    .padding(.horizontal)
                    .padding(.vertical, 8)
                }
                .background(.ultraThinMaterial.opacity(0.3))
                .padding(.top, 8)

                Spacer()

                // Quote card
                if let quote = currentQuote, let palette = currentPalette {
                    QuoteView(quote: quote, palette: palette)
                        .transition(.opacity.animation(.easeInOut(duration: 0.5)))
                        .id(quote.id)
                        .opacity(isTransitioning ? 0.3 : 1)
                        .animation(.easeInOut(duration: 0.3), value: isTransitioning)
                }

                Spacer()

                // Refresh button
                Button(action: {
                    withAnimation(.spring(response: 0.4, dampingFraction: 0.8)) {
                        refreshQuote()
                    }
                }) {
                    HStack(spacing: 6) {
                        Image(systemName: "arrow.clockwise")
                            .font(.system(size: 14, weight: .semibold))
                        Text("New Quote")
                            .font(.system(size: 14, weight: .medium))
                    }
                    .padding(.vertical, 10)
                    .padding(.horizontal, 20)
                    .background(Color.black.opacity(0.25))
                    .foregroundColor(Color.white.opacity(0.9))
                    .overlay(
                        Capsule()
                            .stroke(Color.white.opacity(0.12), lineWidth: 1)
                    )
                    .clipShape(Capsule())
                }
                .padding(.bottom, 30)
            }
        }
        .onAppear {
            pickRandomQuote()
        }
        .onTapGesture {
            withAnimation(.spring(response: 0.6, dampingFraction: 0.8)) {
                refreshQuote()
            }
        }
    }

    private func pickRandomQuote(avoiding avoidQuote: Quote? = nil) {
        let pool = filteredQuotes.isEmpty ? quotes : filteredQuotes
        guard !pool.isEmpty else { return }

        var nextQuote: Quote
        var attempts = 0
        repeat {
            nextQuote = pool.randomElement()!
            attempts += 1
        } while nextQuote.id == avoidQuote?.id && pool.count > 1 && attempts < 10

        currentQuote = nextQuote
        currentPalette = palettes.randomElement()
    }

    private func refreshQuote() {
        guard !isTransitioning else { return }
        isTransitioning = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            pickRandomQuote(avoiding: currentQuote)
            isTransitioning = false
        }
    }
}

// Helper for Hex Colors
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (1, 1, 1, 0)
        }

        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

#Preview {
    ContentView()
}
