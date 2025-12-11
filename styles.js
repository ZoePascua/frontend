import { StyleSheet, Platform } from 'react-native';

// =========================================================
// DESIGN TOKENS (Hello Kitty Palette, but with Sharp Edges)
// =========================================================
const COLOR = {
    // Brand & Intent 
    PRIMARY: '#ED164F',             // Spanish Crimson (The signature bright red/pink for CTA/Focus)
    SECONDARY: '#FFE717',           // Vivid Yellow (Accent/Highlight for a bow-like pop)
    ACCENT_PINK: '#F5A3C8',         // Rogue Pink (Softer accent for borders/subtle elements)
    
    // Backgrounds & Surfaces
    BG_LIGHT: '#FFF3F7',            // Soft Pink/Near White (Page Background)
    SURFACE_CARD: '#FFFFFF',        // Pure White (Card/Modal Surface)
    
    // Typography & Accessibility
    TEXT_ON_LIGHT: '#1E181A',       // Eerie Black (Primary text on light BG)
    TEXT_MUTED: '#ED164F',          // Spanish Crimson (Secondary/Helper text, Placeholder color)
    TEXT_BUTTON: '#FFFFFF',         // White text for high contrast on pink/red buttons
    
    // System Feedback
    ERROR: '#D6213B',               // A deeper crimson for error messages
};

// =========================================================
// LAYOUT: SPACINg - Retaining the sparse, airy layout
// =========================================================
const SPACING = {
    XS: 2,   
    S: 6,    
    M: 16,   
    L: 32,   
    XL: 56,  
    XXL: 80, 
};

// =========================================================
// BORDER - Sharp, defined edges (or very minimal radius)
// =========================================================
const BORDER = {
    RADIUS_S: 2,        // Near-zero radius for a crisp look
    RADIUS_L: 4,        // Minimal radius for cards
    WIDTH: 2,           
    WIDTH_FOCUS: 4,     
};

// =========================================================
// SHADOWS & PLATFORM EFFECTS (Soft and inviting)
// =========================================================
const SHADOW = {
    CARD_SOFT_DEPTH: {
        ...Platform.select({
            ios: {
                shadowColor: COLOR.ACCENT_PINK, 
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    
    BUTTON_LIFT_PRIMARY: {
        ...Platform.select({
            ios: {
                shadowColor: COLOR.PRIMARY,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.9,
                shadowRadius: 5,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    
    BUTTON_LIFT_TERTIARY: {
        ...Platform.select({
            ios: {
                shadowColor: COLOR.TEXT_ON_LIGHT, 
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 2,
            },
        }),
    },
};

// =========================================================
// TYPOGRAPHY BASE - Rounded, friendly, and bold
// =========================================================
const FONT = {
    // Using a generic rounded sans-serif fallback for the Hello Kitty aesthetic
    FONT_FAMILY_BASE: Platform.select({
        ios: 'Arial Rounded MT Bold', 
        android: 'sans-serif-condensed', 
        default: 'Varela Round, Quicksand, sans-serif', 
    }),
    
    H1: {
        fontSize: 38, 
        fontWeight: '900',
        letterSpacing: 1.5,
    },
    BODY_STRONG: {
        fontSize: 19, 
        fontWeight: '700',
        lineHeight: 28,
    },
    BODY: {
        fontSize: 18, 
        lineHeight: 32, 
    },
    LABEL: {
        fontSize: 18, 
        fontWeight: '600',
    },
};

const FONT_BASE_STYLE = {
    fontFamily: FONT.FONT_FAMILY_BASE,
};

// =========================================================
// ABSTRACT BASE STYLES
// =========================================================

// Cards use the minimal radius (BORDER.RADIUS_L)
const _cardBase = {
    backgroundColor: COLOR.SURFACE_CARD,
    borderRadius: BORDER.RADIUS_L, 
    borderWidth: BORDER.WIDTH,
    borderColor: COLOR.ACCENT_PINK,
    width: '100%',
    maxWidth: 500, 
    ...SHADOW.CARD_SOFT_DEPTH, 
    ...FONT_BASE_STYLE,
};

// Button base style (using smaller padding, SPACING.M)
const _buttonBase = {
    paddingVertical: SPACING.M, 
    borderRadius: BORDER.RADIUS_S, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: BORDER.WIDTH / 2, 
    borderColor: 'rgba(255,255,255,0.5)', 
    ...FONT_BASE_STYLE,
};

// =========================================================
// EXPORTS 
// =========================================================
export const Tokens = {
    COLOR,
    SPACING,
    BORDER,
    FONT,
};

// =========================================================
// STYLESHEET (CONCRETE STYLES)
// =========================================================
const styles = StyleSheet.create({
    // --- LAYOUT & CONTAINERS ---

    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.BG_LIGHT,
        paddingHorizontal: SPACING.L,
        paddingTop: SPACING.XXL, 
        paddingBottom: SPACING.XXL, 
        justifyContent: 'center', 
        alignItems: 'center',    
    },

    screenContainer: {
        flex: 1,
        backgroundColor: COLOR.BG_LIGHT,
    },

    contentWrapperCenter: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.XL, 
    },

    maxWidthContainer: {
        width: '100%',
        maxWidth: 500,
    },
    
    // --- TYPOGRAPHY ---

    title: {
        ...FONT.H1,
        ...FONT_BASE_STYLE,
        color: COLOR.PRIMARY,
        textAlign: 'center',
        marginBottom: SPACING.XL, 
        textShadowColor: COLOR.ACCENT_PINK, 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },

    homepageText: { 
        ...FONT.BODY,
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_ON_LIGHT,
        textAlign: 'center',
        marginBottom: SPACING.XL,
    },

    // --- CARD STYLES ---

    card: { 
        ..._cardBase, 
        padding: SPACING.L, 
        marginBottom: SPACING.XL, 
    },
    formCard: { 
        ..._cardBase,
        padding: SPACING.L,
        marginBottom: SPACING.XL,
    },
    reviewCard: { 
        ..._cardBase,
        padding: SPACING.L, 
        marginBottom: SPACING.XL,
    },
    userCard: { 
        ..._cardBase,
        padding: SPACING.M,
        marginBottom: SPACING.L, 
    },


    // --- TEXT FIELDS & LABELS ---
    inputContainer: {
        marginBottom: SPACING.M,
    },

    label: {
        ...FONT.LABEL,
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_MUTED,
        marginBottom: SPACING.S, 
    },

    input: {
        height: 52, 
        borderWidth: BORDER.WIDTH,
        borderColor: COLOR.ACCENT_PINK,
        borderRadius: BORDER.RADIUS_S, 
        paddingHorizontal: SPACING.M,
        ...FONT.BODY,
        ...FONT_BASE_STYLE,
        backgroundColor: COLOR.SURFACE_CARD,
        color: COLOR.TEXT_ON_LIGHT,
    },
    
    focusedInput: {
        borderColor: COLOR.PRIMARY, 
        borderWidth: BORDER.WIDTH_FOCUS,
        shadowColor: COLOR.PRIMARY,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },


    // --- BUTTONS ---

    button: { 
        ..._buttonBase,
        backgroundColor: COLOR.PRIMARY,
        ...SHADOW.BUTTON_LIFT_PRIMARY, 
    },

    submitButton: { 
        ..._buttonBase,
        backgroundColor: COLOR.PRIMARY,
        // The flex: 1 and margin-left needed for the layout are applied via the buttonsContainer
        flex: 1, 
        marginLeft: SPACING.M,
        ...SHADOW.BUTTON_LIFT_PRIMARY, 
    },

    // FIX: This style is for your "GO BACK TO EDIT" button.
    editButton: { 
        ..._buttonBase,
        backgroundColor: 'transparent', // Make it transparent (Outline button)
        borderColor: COLOR.PRIMARY,     // Use the bold Crimson Pink for the border
        borderWidth: BORDER.WIDTH,
        flex: 1, // Ensures it takes up half the width
        marginRight: SPACING.M, // Space from submit button (Redundant, but safe to include)
        ...SHADOW.BUTTON_LIFT_TERTIARY, 
    },

    // Button Text Styles
    buttonText: { 
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_BUTTON, 
        fontSize: 18, 
        fontWeight: '900',
    },

    submitButtonText: { 
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_BUTTON, 
        fontSize: 17, 
        fontWeight: '900',
    },
    
    // FIX: This style is for the "GO BACK TO EDIT" text. Set the color to PRIMARY.
    secondaryButtonText: { 
        ...FONT_BASE_STYLE,
        color: COLOR.PRIMARY, // <--- THE FIX: Text is now bold Crimson Pink
        fontSize: 17,
        fontWeight: '900',
        letterSpacing: 0.5,
    },

    tertiaryButtonText: {
        ...FONT_BASE_STYLE,
        color: COLOR.PRIMARY, 
        fontSize: 17,
        fontWeight: '900',
    },
    
    // --- REVIEW / DATA DISPLAY SECTIONS ---

    dataRow: {
        flexDirection: 'row',
        marginBottom: SPACING.S, 
        alignItems: 'flex-start',
    },

    dataLabel: {
        ...FONT.BODY_STRONG,
        ...FONT_BASE_STYLE,
        color: COLOR.PRIMARY, 
        marginRight: SPACING.M,
        minWidth: 100, 
    },

    dataValue: {
        ...FONT.BODY,
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_ON_LIGHT,
        flexShrink: 1,
    },
    
    // --- USER LIST (UserListPage.js) ---

    userListWrapper: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: SPACING.L, 
    },

    userRow: {
        flexDirection: 'row',
        marginBottom: SPACING.S,
    },

    userLabel: {
        ...FONT_BASE_STYLE,
        fontWeight: '600',
        color: COLOR.TEXT_MUTED,
        width: 100,
    },

    userValue: {
        ...FONT_BASE_STYLE,
        color: COLOR.TEXT_ON_LIGHT,
        flexShrink: 1,
    },

    // --- BUTTON CONTAINER (ReviewPage.js) ---
    buttonsContainer: {
        marginTop: SPACING.XL, 
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    
    // This wrapper is not strictly needed for this file, but keeping it
    // just in case it's used elsewhere for spacing/alignment.
    submitButtonWrapper: { 
        flex: 1, 
        marginLeft: SPACING.M, 
    },

    // --- UTILITIES / FEEDBACK STATES ---

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.XXL,
    }
});

export default styles;