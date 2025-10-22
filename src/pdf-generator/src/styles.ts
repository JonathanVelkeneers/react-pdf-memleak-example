import {StyleSheet} from "@react-pdf/renderer";

const indent = 38;
export const styles = StyleSheet.create({
    page: {
        padding: "0 28 20 28",
        fontSize: 10,
        color: "#000",
    },
    header: {
        borderBottom: '1pt solid #000',
        paddingBottom: 8,
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        left: "28",
        right: "28",
        fontSize: 8,
        padding: "5 0",
        borderTop: 1,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'black',
        marginBottom: 4,
        textAlign: "center",
    },
    sectionTitle: {
        marginBottom: 10,
        fontSize: 11,
        fontWeight: 'bold',
        width: '100%',
        color: "#FFF",
        backgroundColor: '#c1c1c1',
        padding: 6,
    },
    subsection: {
        marginBottom: 10,
    },
    subSectionTitle: {
        fontSize: 11,
        fontWeight: 'heavy',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 14
    },
    subsectionContent: {
        marginLeft: indent,
    },
    textBold: {
        fontWeight: 'bold',
    },
    textHeavy: {
        fontWeight: 'heavy',
    },
    textLarge: {
        fontSize: 11,
    },
    textSmall: {
        fontSize: 8,
        fontWeight: 'light',
    },
    twoColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    column: {width: '48%'},
    row: {
        marginBottom: 10,
    },
    table: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: "1px",
        borderColor: '#000',
        marginBottom: 10,
    },
});

