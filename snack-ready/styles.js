import { StyleSheet, Platform } from 'react-native';

// (copied style tokens and stylesheet from your project)

const COLOR = {
    PRIMARY: '#ED164F',
    SECONDARY: '#FFE717',
    ACCENT_PINK: '#F5A3C8',
    BG_LIGHT: '#FFF3F7',
    SURFACE_CARD: '#FFFFFF',
    TEXT_ON_LIGHT: '#1E181A',
    TEXT_MUTED: '#ED164F',
    TEXT_BUTTON: '#FFFFFF',
    ERROR: '#D6213B',
};

const SPACING = { XS:2, S:6, M:16, L:32, XL:56, XXL:80 };
const BORDER = { RADIUS_S:2, RADIUS_L:4, WIDTH:2, WIDTH_FOCUS:4 };

const SHADOW = {
  CARD_SOFT_DEPTH: { ...Platform.select({ ios:{shadowColor: COLOR.ACCENT_PINK, shadowOffset:{width:0,height:4}, shadowOpacity:0.5, shadowRadius:10}, android:{elevation:6}})},
  BUTTON_LIFT_PRIMARY: { ...Platform.select({ ios:{shadowColor: COLOR.PRIMARY, shadowOffset:{width:0,height:5}, shadowOpacity:0.9, shadowRadius:5}, android:{elevation:8}})},
  BUTTON_LIFT_TERTIARY: { ...Platform.select({ ios:{shadowColor: COLOR.TEXT_ON_LIGHT, shadowOffset:{width:0,height:2}, shadowOpacity:0.2, shadowRadius:3}, android:{elevation:2}})},
};

const FONT = {
  FONT_FAMILY_BASE: Platform.select({ ios:'Arial Rounded MT Bold', android:'sans-serif-condensed', default:'Varela Round, Quicksand, sans-serif'}),
  H1: { fontSize:38, fontWeight:'900', letterSpacing:1.5 },
  BODY_STRONG: { fontSize:19, fontWeight:'700', lineHeight:28 },
  BODY: { fontSize:18, lineHeight:32 },
  LABEL: { fontSize:18, fontWeight:'600' }
};

const FONT_BASE_STYLE = { fontFamily: FONT.FONT_FAMILY_BASE };

const _cardBase = { backgroundColor: COLOR.SURFACE_CARD, borderRadius: BORDER.RADIUS_L, borderWidth: BORDER.WIDTH, borderColor: COLOR.ACCENT_PINK, width: '100%', maxWidth:500, ...SHADOW.CARD_SOFT_DEPTH, ...FONT_BASE_STYLE };
const _buttonBase = { paddingVertical: SPACING.M, borderRadius: BORDER.RADIUS_S, alignItems: 'center', justifyContent: 'center', width: '100%', borderWidth: BORDER.WIDTH/2, borderColor:'rgba(255,255,255,0.5)', ...FONT_BASE_STYLE };

const styles = StyleSheet.create({
  mainContainer: { flex:1, backgroundColor: COLOR.BG_LIGHT, paddingHorizontal: SPACING.L, paddingTop: SPACING.XXL, paddingBottom: SPACING.XXL, justifyContent:'center', alignItems:'center' },
  title: { ...FONT.H1, ...FONT_BASE_STYLE, color: COLOR.PRIMARY, textAlign:'center', marginBottom: SPACING.XL },
  formCard: { ..._cardBase, padding: SPACING.L, marginBottom: SPACING.XL },
  dataValue: { ...FONT.BODY, ...FONT_BASE_STYLE, color: COLOR.TEXT_ON_LIGHT, flexShrink:1 },
  button: { ..._buttonBase, backgroundColor: COLOR.PRIMARY, ...SHADOW.BUTTON_LIFT_PRIMARY },
  buttonText: { ...FONT_BASE_STYLE, color: COLOR.TEXT_BUTTON, fontSize:18, fontWeight:'900' }
});

export default styles;
