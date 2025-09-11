Ni// Design Tokens für konsistente Styling-Werte
export const designTokens = {
  spacing: {
    sectionPadding: 'py-32',
    containerPadding: 'px-6',
    gridGap: 'gap-20',
    textSpacing: 'mb-8',
    titleSpacing: 'mb-12'
  },
  
  typography: {
    // Logo - Canto Bold, Versalien
    logo: 'font-canto-bold text-2xl lg:text-3xl font-bold tracking-wide uppercase',
    
    // Headlines - Canto Semibold, Versalien  
    heroTitle: 'font-canto-semibold text-5xl lg:text-7xl font-semibold tracking-wide uppercase',
    heroSubtitle: 'font-canto-semibold text-xl lg:text-2xl font-semibold opacity-90 uppercase',
    sectionTitle: 'font-canto-semibold text-4xl lg:text-6xl font-semibold tracking-[0.2em] uppercase',
    subsectionTitle: 'font-canto-semibold text-3xl lg:text-5xl font-semibold tracking-[0.15em] uppercase',
    
    // Body Text - Muli Regular
    bodyLarge: 'font-muli text-xl lg:text-2xl font-normal leading-[1.8] tracking-wide',
    bodyRegular: 'font-muli text-lg font-normal leading-[1.8] tracking-wide',
    bodySmall: 'font-muli text-base font-normal leading-[1.6] tracking-wide'
  },
  
  layout: {
    maxContentWidth: 'max-w-3xl',
    maxTextWidth: 'max-w-lg',
    gridCols: 'lg:grid-cols-12',
    imageCol: 'lg:col-span-7',
    textCol: 'lg:col-span-5',
    aspectRatio: 'aspect-[5/4]'
  },
  
  colors: {
    // Brand Colors
    primary: '#e88906',        // Orange
    secondary: '#cbaea5',      // Beige/Rosa
    tertiary: '#f2eae5',       // Helles Beige
    black: '#000000',          // Schwarz
    
    // Background Colors
    backgroundWhite: 'bg-white',
    backgroundPrimary: 'bg-[#e88906]',
    backgroundSecondary: 'bg-[#cbaea5]',
    backgroundTertiary: 'bg-[#f2eae5]',
    backgroundBlack: 'bg-black',
    
    // Text Colors
    textPrimary: 'text-[#e88906]',
    textSecondary: 'text-[#cbaea5]',
    textTertiary: 'text-[#f2eae5]',
    textBlack: 'text-black',
    textWhite: 'text-white',
    
    // Border Colors
    borderPrimary: 'border-[#e88906]',
    borderSecondary: 'border-[#cbaea5]',
    borderTertiary: 'border-[#f2eae5]',
    borderBlack: 'border-black'
  },
  
  elements: {
    designLine: 'w-px bg-[#e88906]',
    designLineSecondary: 'w-px bg-[#cbaea5]',
    designLineBlack: 'w-px bg-black',
    designLineShort: 'h-12',
    designLineLong: 'h-16',
    imagePlaceholder: 'bg-[#f2eae5] relative overflow-hidden',
    button: 'bg-[#e88906] text-white px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-[#d17a05] transition-colors duration-300',
    buttonSecondary: 'bg-[#cbaea5] text-white px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-[#b89b8c] transition-colors duration-300',
    buttonOutline: 'border-2 border-[#e88906] text-[#e88906] px-12 py-4 text-lg font-muli font-medium tracking-wide hover:bg-[#e88906] hover:text-white transition-colors duration-300'
  }
} as const

// Helper-Funktionen für häufige Kombinationen
export const getBackgroundClass = (bg: 'white' | 'primary' | 'secondary' | 'tertiary' | 'black') => {
  switch (bg) {
    case 'primary': return designTokens.colors.backgroundPrimary
    case 'secondary': return designTokens.colors.backgroundSecondary
    case 'tertiary': return designTokens.colors.backgroundTertiary
    case 'black': return designTokens.colors.backgroundBlack
    default: return designTokens.colors.backgroundWhite
  }
}

export const getTextColorClass = (color: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white') => {
  switch (color) {
    case 'primary': return designTokens.colors.textPrimary
    case 'secondary': return designTokens.colors.textSecondary
    case 'tertiary': return designTokens.colors.textTertiary
    case 'white': return designTokens.colors.textWhite
    default: return designTokens.colors.textBlack
  }
}

export const getImageOrderClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:order-2' : ''

export const getTextOrderClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:order-1' : ''

export const getTextAlignClass = (position: 'left' | 'right') => 
  position === 'right' ? 'lg:ml-auto' : ''