import React from 'react';

import {Document, Page, Text, View} from '@react-pdf/renderer';

import type {PdfTemplateProps} from "./pdf-template-props";
import {styles} from "./styles";
import {SubSectionTitle} from "./components/sub-section-title";


export function PdfTemplate({data}: Readonly<PdfTemplateProps>) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <Text style={styles.headerTitle}>
                        {"t('header.sds')"}
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: 12,
                    }}>
                        {"t('header.regulation')"}
                    </Text>
                    <Text style={styles.headerTitle}>
                        {data.identification.productIdentifier.chemicalName} ({data.identification.productIdentifier.tradeName})
                    </Text>
                    <View style={styles.headerRow}>
                        <Text>
                            {"t('header.version')"}: {data.header.version.major}.{data.header.version.minor + 1}
                        </Text>
                        <Text>
                            {"t('header.lastRevisionDate')"}: {data.header.revisionDate}
                        </Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text>
                            {"t('header.currentRevisionDate')"}: {new Date().toLocaleDateString("en-BE", {
                            day: "2-digit", month: "2-digit", year: "numeric"
                        })}
                        </Text>
                        <Text>
                            {"t('header.firstRevisionDate')"}: {data.header.firstRevisionDate ?? data.header.revisionDate}
                        </Text>
                    </View>
                </View>

                <View>
                    {/*Adding break to the element below causes a memory leak. Removing it fixes it.*/}
                    <Text style={styles.sectionTitle} break>
                        {"t('sections.exposureControls._title')"}
                    </Text>

                    <View style={styles.subsection}>
                        <SubSectionTitle listValue={"8.1"}
                                         title={"t('sections.exposureControls.controlParameters._title')"}/>
                        <View style={styles.subsectionContent}>
                            <View style={styles.table} wrap={false}>
                                <Text style={[styles.textBold, {
                                    padding: 6,
                                    borderBottom: 1,
                                }]}>
                                    {"t('sections.exposureControls.controlParameters.occupationalExposureLimits._title')"}
                                </Text>
                                <View style={[styles.twoColumn, {
                                    flexDirection: 'row',
                                    margin: 0,
                                }]}>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '10%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.country')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '20%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.substance')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '15%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('general.cas')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '10%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.STELPPM')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '10%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.STELMGM3')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '10%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.TWAPPM')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '10%',
                                        padding: '6 6',
                                        borderRight: 1
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.TWAMGM3')"}
                                    </Text>
                                    <Text style={[styles.textBold, {
                                        textAlign: 'center',
                                        width: '15%',
                                        padding: '6 6',
                                    }]}>
                                        {"t('sections.exposureControls.controlParameters.occupationalExposureLimits.regulation')"}
                                    </Text>
                                </View>
                                {data.exposureControls.occupationalLimits && data.exposureControls.occupationalLimits.length > 0 ? (
                                    data.exposureControls.occupationalLimits.map((lim, idx) => (
                                        <View key={`${lim.countryOrRegion}-${idx}`}
                                              style={{flexDirection: "row"}}>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '10%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.countryOrRegion}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '20%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.substance}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '15%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.cas}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '10%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.shortTerm?.ppm ?? ''}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '10%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.shortTerm?.mgPerM3 ?? ''}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '10%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.longTerm?.ppm ?? ''}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '10%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                borderRight: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.longTerm?.mgPerM3 ?? ''}</Text>
                                            <Text style={{
                                                textAlign: 'center',
                                                width: '15%',
                                                padding: '6 6',
                                                borderTop: 1,
                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                            }}>{lim.regulationCode}</Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text>{"t('general.noInfo')"}</Text>
                                )}
                            </View>

                            <View>
                                <Text style={[styles.textBold, {marginTop: 8, marginBottom: 6}]}>
                                    {"t('sections.exposureControls.controlParameters.notation')"}
                                </Text>
                                <View style={styles.twoColumn} wrap={false}>
                                    <Text style={{width: "5%"}}>
                                        {"t('sections.exposureControls.controlParameters.notationValue.STEL')"}
                                    </Text>
                                    <Text style={{width: "90%"}}>
                                        {"t('sections.exposureControls.controlParameters.notationValue.STELValue')"}
                                    </Text>
                                </View>
                                <View style={styles.twoColumn} wrap={false}>
                                    <Text style={{width: "5%"}}>
                                        {"t('sections.exposureControls.controlParameters.notationValue.TWA')"}
                                    </Text>
                                    <Text style={{width: "90%"}}>
                                        {"t('sections.exposureControls.controlParameters.notationValue.TWAValue')"}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.subsection} break>
                        <SubSectionTitle listValue={"8.2"}
                                         title={"t('sections.exposureControls.exposureControls._title')"}/>
                        <View style={styles.subsectionContent}>
                            <View style={styles.row} wrap={false}>
                                <Text style={[styles.textBold]}>
                                    {"t('sections.exposureControls.exposureControls.engineeringControls')"}
                                </Text>
                                <Text>
                                    {data.exposureControls.engineeringControls ?? "t('general.noInfo')"}
                                </Text>
                            </View>

                            <Text style={[styles.textBold, styles.textLarge, {marginTop: 8, marginBottom: 6}]}>
                                {"t('sections.exposureControls.exposureControls.personalProtectiveEquipment._title')"}
                            </Text>

                            <View style={styles.row} wrap={false}>
                                <Text
                                    style={[styles.textBold]}>{"t('sections.exposureControls.exposureControls.personalProtectiveEquipment.eyeFace')"}</Text>
                                <Text>{data.exposureControls.personalProtectiveEquipment.eyeOrFace ?? "t('general.noInfo')"}</Text>
                            </View>

                            <View style={styles.row} wrap={false}>
                                <Text
                                    style={[styles.textBold]}>{"t('sections.exposureControls.exposureControls.personalProtectiveEquipment.hand')"}</Text>
                                <View>
                                    {data.exposureControls.personalProtectiveEquipment.hand ? (
                                        <>
                                            {data.exposureControls.personalProtectiveEquipment.hand.gloves && data.exposureControls.personalProtectiveEquipment.hand.gloves.length > 0 ? (
                                                <View style={[styles.table, {marginBottom: 4}]}>
                                                    <Text style={[styles.textBold, styles.textLarge, {padding: 6}]}>
                                                        {"t('sections.exposureControls.exposureControls.personalProtectiveEquipment.gloves._title')"}
                                                    </Text>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text style={[styles.textBold, {
                                                            textAlign: 'center',
                                                            width: '33%',
                                                            padding: '6 6',
                                                            borderTop: 1,
                                                            borderRight: 1,
                                                        }]}>{'t("sections.exposureControls.exposureControls.personalProtectiveEquipment.gloves.material")'}</Text>
                                                        <Text style={{
                                                            textAlign: 'center',
                                                            width: '33%',
                                                            padding: '6 6',
                                                            borderTop: 1,
                                                            borderRight: 1,
                                                        }}>{'t("sections.exposureControls.exposureControls.personalProtectiveEquipment.gloves.thickness")'}</Text>
                                                        <Text style={{
                                                            textAlign: 'center',
                                                            width: '34%',
                                                            padding: '6 6',
                                                            borderTop: 1,
                                                        }}>{'t("sections.exposureControls.exposureControls.personalProtectiveEquipment.gloves.breakthroughTime")'}</Text>
                                                    </View>
                                                    {data.exposureControls.personalProtectiveEquipment.hand.gloves.map((g, idx) => (
                                                        <View key={g.material} style={{flexDirection: 'row'}}>
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                width: '33%',
                                                                padding: '6 6',
                                                                borderTop: 1,
                                                                borderRight: 1,
                                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                                            }}>{g.material}</Text>
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                width: '33%',
                                                                padding: '6 6',
                                                                borderTop: 1,
                                                                borderRight: 1,
                                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                                            }}>{g.thickness}</Text>
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                width: '34%',
                                                                padding: '6 6',
                                                                borderTop: 1,
                                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                                            }}>{g.breakthroughTime}</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            ) : (
                                                <Text>{"t('general.noInfo')"}</Text>
                                            )}
                                            {data.exposureControls.personalProtectiveEquipment.hand.unsuitableMaterials && data.exposureControls.personalProtectiveEquipment.hand.unsuitableMaterials.length > 0 && (
                                                <View style={[styles.table, {marginBottom: 4}]}>
                                                    <Text style={[styles.textBold, styles.textLarge, {padding: 6}]}>
                                                        {"t('sections.exposureControls.exposureControls.personalProtectiveEquipment.unsuitable')"}
                                                    </Text>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text style={[styles.textBold, {
                                                            textAlign: 'center',
                                                            width: '100%',
                                                            padding: '6 6',
                                                            borderTop: 1,
                                                        }]}>{'t("sections.exposureControls.exposureControls.personalProtectiveEquipment.material")'}</Text>
                                                    </View>
                                                    {data.exposureControls.personalProtectiveEquipment.hand.unsuitableMaterials.map((m, idx) => (
                                                        <View key={m} style={{flexDirection: 'row'}}>
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                width: '100%',
                                                                padding: '6 6',
                                                                borderTop: 1,
                                                                backgroundColor: idx % 2 === 0 ? '#fff' : '#dcdcdc'
                                                            }}>{m}</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            )}
                                            <Text>{data.exposureControls.personalProtectiveEquipment.hand.description}</Text>
                                        </>
                                    ) : (
                                        <Text>{"t('general.noInfo')"}</Text>
                                    )}
                                </View>
                            </View>

                            <View style={styles.row} wrap={false}>
                                <Text
                                    style={[styles.textBold]}>{"t('sections.exposureControls.exposureControls.personalProtectiveEquipment.respiratory')"}</Text>
                                <Text>
                                    {data.exposureControls.personalProtectiveEquipment.respiratory ?? "t('general.noInfo')"}
                                </Text>
                            </View>

                            <View style={[styles.row, {marginTop: 6}]} wrap={false}>
                                <Text style={[styles.textBold]}>
                                    {"t('sections.exposureControls.exposureControls.environmental')"}
                                </Text>
                                <Text>
                                    {data.exposureControls.environmentalControls ?? "t('general.noInfo')"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.footer} fixed>
                    <Text>{'t("footer.language")'}</Text>
                    <Text
                        render={({pageNumber, totalPages}) => (
                            `${'t("footer.page")'}: ${pageNumber}/${totalPages}`
                        )}/>
                </View>
            </Page>
        </Document>
    )
}
