/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ErrorReport = {
    errorCode: ErrorReport.errorCode
    errorKlass: string
    errorProperties: Array<Record<string, any>>
    errorProperty: string
    mainId: string
    mainKlass: string
    message: string
    /**
     * The actual type is unknown.
     * (Java type was: `class java.lang.Object`)
     */
    value: Record<string, any>
}

export namespace ErrorReport {
    export enum errorCode {
        E1000 = 'E1000',
        E1001 = 'E1001',
        E1002 = 'E1002',
        E1003 = 'E1003',
        E1004 = 'E1004',
        E1005 = 'E1005',
        E1006 = 'E1006',
        E1100 = 'E1100',
        E1101 = 'E1101',
        E1102 = 'E1102',
        E1103 = 'E1103',
        E1104 = 'E1104',
        E1105 = 'E1105',
        E1106 = 'E1106',
        E1107 = 'E1107',
        E1108 = 'E1108',
        E1109 = 'E1109',
        E1110 = 'E1110',
        E1111 = 'E1111',
        E1112 = 'E1112',
        E1113 = 'E1113',
        E1114 = 'E1114',
        E1115 = 'E1115',
        E1116 = 'E1116',
        E1117 = 'E1117',
        E1118 = 'E1118',
        E1119 = 'E1119',
        E1120 = 'E1120',
        E1500 = 'E1500',
        E1501 = 'E1501',
        E1502 = 'E1502',
        E1503 = 'E1503',
        E1504 = 'E1504',
        E1510 = 'E1510',
        E1511 = 'E1511',
        E1512 = 'E1512',
        E1513 = 'E1513',
        E1514 = 'E1514',
        E1515 = 'E1515',
        E1516 = 'E1516',
        E1520 = 'E1520',
        E1521 = 'E1521',
        E1522 = 'E1522',
        E1523 = 'E1523',
        E2000 = 'E2000',
        E2001 = 'E2001',
        E2002 = 'E2002',
        E2003 = 'E2003',
        E2004 = 'E2004',
        E2005 = 'E2005',
        E2006 = 'E2006',
        E2007 = 'E2007',
        E2008 = 'E2008',
        E2009 = 'E2009',
        E2010 = 'E2010',
        E2011 = 'E2011',
        E2012 = 'E2012',
        E2013 = 'E2013',
        E2014 = 'E2014',
        E2015 = 'E2015',
        E2016 = 'E2016',
        E2017 = 'E2017',
        E2018 = 'E2018',
        E2019 = 'E2019',
        E2020 = 'E2020',
        E2021 = 'E2021',
        E2022 = 'E2022',
        E2023 = 'E2023',
        E2024 = 'E2024',
        E2025 = 'E2025',
        E2026 = 'E2026',
        E2027 = 'E2027',
        E2028 = 'E2028',
        E2029 = 'E2029',
        E2030 = 'E2030',
        E2031 = 'E2031',
        E2032 = 'E2032',
        E2033 = 'E2033',
        E2034 = 'E2034',
        E2035 = 'E2035',
        E2036 = 'E2036',
        E2037 = 'E2037',
        E2038 = 'E2038',
        E2039 = 'E2039',
        E2040 = 'E2040',
        E2041 = 'E2041',
        E2042 = 'E2042',
        E2043 = 'E2043',
        E2044 = 'E2044',
        E2200 = 'E2200',
        E2201 = 'E2201',
        E2202 = 'E2202',
        E2203 = 'E2203',
        E2204 = 'E2204',
        E2205 = 'E2205',
        E2206 = 'E2206',
        E2207 = 'E2207',
        E2208 = 'E2208',
        E2300 = 'E2300',
        E2301 = 'E2301',
        E3000 = 'E3000',
        E3001 = 'E3001',
        E3002 = 'E3002',
        E3003 = 'E3003',
        E3004 = 'E3004',
        E3005 = 'E3005',
        E3006 = 'E3006',
        E3008 = 'E3008',
        E3009 = 'E3009',
        E3010 = 'E3010',
        E3011 = 'E3011',
        E3012 = 'E3012',
        E3013 = 'E3013',
        E3014 = 'E3014',
        E3015 = 'E3015',
        E3016 = 'E3016',
        E3017 = 'E3017',
        E3018 = 'E3018',
        E3019 = 'E3019',
        E3020 = 'E3020',
        E3021 = 'E3021',
        E3022 = 'E3022',
        E3023 = 'E3023',
        E3024 = 'E3024',
        E3025 = 'E3025',
        E3026 = 'E3026',
        E3027 = 'E3027',
        E3028 = 'E3028',
        E3029 = 'E3029',
        E3030 = 'E3030',
        E3031 = 'E3031',
        E3032 = 'E3032',
        E3040 = 'E3040',
        E4000 = 'E4000',
        E4001 = 'E4001',
        E4002 = 'E4002',
        E4003 = 'E4003',
        E4004 = 'E4004',
        E4005 = 'E4005',
        E4006 = 'E4006',
        E4007 = 'E4007',
        E4008 = 'E4008',
        E4009 = 'E4009',
        E4010 = 'E4010',
        E4011 = 'E4011',
        E4012 = 'E4012',
        E4013 = 'E4013',
        E4014 = 'E4014',
        E4015 = 'E4015',
        E4016 = 'E4016',
        E4017 = 'E4017',
        E4018 = 'E4018',
        E4019 = 'E4019',
        E4020 = 'E4020',
        E4021 = 'E4021',
        E4022 = 'E4022',
        E4023 = 'E4023',
        E4024 = 'E4024',
        E4025 = 'E4025',
        E4026 = 'E4026',
        E4027 = 'E4027',
        E4028 = 'E4028',
        E4029 = 'E4029',
        E4030 = 'E4030',
        E4031 = 'E4031',
        E4032 = 'E4032',
        E4033 = 'E4033',
        E4034 = 'E4034',
        E4035 = 'E4035',
        E4036 = 'E4036',
        E4037 = 'E4037',
        E4038 = 'E4038',
        E4039 = 'E4039',
        E4040 = 'E4040',
        E4041 = 'E4041',
        E4042 = 'E4042',
        E4043 = 'E4043',
        E4044 = 'E4044',
        E4045 = 'E4045',
        E4046 = 'E4046',
        E4047 = 'E4047',
        E4048 = 'E4048',
        E4049 = 'E4049',
        E4054 = 'E4054',
        E4056 = 'E4056',
        E4055 = 'E4055',
        E4050 = 'E4050',
        E4051 = 'E4051',
        E4052 = 'E4052',
        E4053 = 'E4053',
        E4057 = 'E4057',
        E4058 = 'E4058',
        E4060 = 'E4060',
        E4061 = 'E4061',
        E4062 = 'E4062',
        E4063 = 'E4063',
        E4064 = 'E4064',
        E4065 = 'E4065',
        E4066 = 'E4066',
        E4067 = 'E4067',
        E4068 = 'E4068',
        E4300 = 'E4300',
        E4301 = 'E4301',
        E4302 = 'E4302',
        E4303 = 'E4303',
        E4304 = 'E4304',
        E4305 = 'E4305',
        E4306 = 'E4306',
        E4307 = 'E4307',
        E4308 = 'E4308',
        E4309 = 'E4309',
        E4310 = 'E4310',
        E4311 = 'E4311',
        E4312 = 'E4312',
        E4313 = 'E4313',
        E4314 = 'E4314',
        E4315 = 'E4315',
        E5000 = 'E5000',
        E5001 = 'E5001',
        E5002 = 'E5002',
        E5003 = 'E5003',
        E5004 = 'E5004',
        E5005 = 'E5005',
        E5006 = 'E5006',
        E5007 = 'E5007',
        E6000 = 'E6000',
        E6001 = 'E6001',
        E6002 = 'E6002',
        E6003 = 'E6003',
        E6004 = 'E6004',
        E6005 = 'E6005',
        E6006 = 'E6006',
        E6007 = 'E6007',
        E6008 = 'E6008',
        E6009 = 'E6009',
        E6010 = 'E6010',
        E6011 = 'E6011',
        E6012 = 'E6012',
        E6013 = 'E6013',
        E6014 = 'E6014',
        E6015 = 'E6015',
        E6016 = 'E6016',
        E6017 = 'E6017',
        E6018 = 'E6018',
        E6019 = 'E6019',
        E6020 = 'E6020',
        E6021 = 'E6021',
        E6100 = 'E6100',
        E6101 = 'E6101',
        E6200 = 'E6200',
        E6201 = 'E6201',
        E6202 = 'E6202',
        E6203 = 'E6203',
        E6204 = 'E6204',
        E6205 = 'E6205',
        E6206 = 'E6206',
        E6207 = 'E6207',
        E6208 = 'E6208',
        E6209 = 'E6209',
        E6210 = 'E6210',
        E6211 = 'E6211',
        E6300 = 'E6300',
        E6301 = 'E6301',
        E6302 = 'E6302',
        E6303 = 'E6303',
        E6304 = 'E6304',
        E6305 = 'E6305',
        E7000 = 'E7000',
        E7003 = 'E7003',
        E7004 = 'E7004',
        E7005 = 'E7005',
        E7006 = 'E7006',
        E7007 = 'E7007',
        E7010 = 'E7010',
        E7020 = 'E7020',
        E7021 = 'E7021',
        E7022 = 'E7022',
        E7023 = 'E7023',
        E7024 = 'E7024',
        E7100 = 'E7100',
        E7101 = 'E7101',
        E7102 = 'E7102',
        E7103 = 'E7103',
        E7104 = 'E7104',
        E7105 = 'E7105',
        E7106 = 'E7106',
        E7107 = 'E7107',
        E7108 = 'E7108',
        E7109 = 'E7109',
        E7110 = 'E7110',
        E7111 = 'E7111',
        E7112 = 'E7112',
        E7113 = 'E7113',
        E7114 = 'E7114',
        E7115 = 'E7115',
        E7116 = 'E7116',
        E7117 = 'E7117',
        E7118 = 'E7118',
        E7119 = 'E7119',
        E7120 = 'E7120',
        E7121 = 'E7121',
        E7122 = 'E7122',
        E7123 = 'E7123',
        E7124 = 'E7124',
        E7125 = 'E7125',
        E7126 = 'E7126',
        E7127 = 'E7127',
        E7128 = 'E7128',
        E7129 = 'E7129',
        E7130 = 'E7130',
        E7131 = 'E7131',
        E7132 = 'E7132',
        E7133 = 'E7133',
        E7134 = 'E7134',
        E7135 = 'E7135',
        E7136 = 'E7136',
        E7137 = 'E7137',
        E7138 = 'E7138',
        E7139 = 'E7139',
        E7140 = 'E7140',
        E7141 = 'E7141',
        E7142 = 'E7142',
        E7200 = 'E7200',
        E7201 = 'E7201',
        E7202 = 'E7202',
        E7203 = 'E7203',
        E7204 = 'E7204',
        E7205 = 'E7205',
        E7206 = 'E7206',
        E7207 = 'E7207',
        E7208 = 'E7208',
        E7209 = 'E7209',
        E7210 = 'E7210',
        E7211 = 'E7211',
        E7212 = 'E7212',
        E7213 = 'E7213',
        E7214 = 'E7214',
        E7215 = 'E7215',
        E7216 = 'E7216',
        E7217 = 'E7217',
        E7218 = 'E7218',
        E7219 = 'E7219',
        E7220 = 'E7220',
        E7221 = 'E7221',
        E7222 = 'E7222',
        E7223 = 'E7223',
        E7224 = 'E7224',
        E7225 = 'E7225',
        E7226 = 'E7226',
        E7227 = 'E7227',
        E7228 = 'E7228',
        E7229 = 'E7229',
        E7230 = 'E7230',
        E7231 = 'E7231',
        E7232 = 'E7232',
        E7234 = 'E7234',
        E7250 = 'E7250',
        E7300 = 'E7300',
        E7301 = 'E7301',
        E7400 = 'E7400',
        E7500 = 'E7500',
        E7501 = 'E7501',
        E7502 = 'E7502',
        E7503 = 'E7503',
        E7600 = 'E7600',
        E7601 = 'E7601',
        E7602 = 'E7602',
        E7603 = 'E7603',
        E7604 = 'E7604',
        E7610 = 'E7610',
        E7611 = 'E7611',
        E7612 = 'E7612',
        E7613 = 'E7613',
        E7614 = 'E7614',
        E7615 = 'E7615',
        E7616 = 'E7616',
        E7617 = 'E7617',
        E7618 = 'E7618',
        E7619 = 'E7619',
        E7620 = 'E7620',
        E7621 = 'E7621',
        E7630 = 'E7630',
        E7631 = 'E7631',
        E7632 = 'E7632',
        E7633 = 'E7633',
        E7634 = 'E7634',
        E7635 = 'E7635',
        E7636 = 'E7636',
        E7637 = 'E7637',
        E7638 = 'E7638',
        E7639 = 'E7639',
        E7640 = 'E7640',
        E7641 = 'E7641',
        E7642 = 'E7642',
        E7643 = 'E7643',
        E7644 = 'E7644',
        E7645 = 'E7645',
        E7650 = 'E7650',
        E7651 = 'E7651',
        E7652 = 'E7652',
        E7653 = 'E7653',
        E7700 = 'E7700',
        E7701 = 'E7701',
        E7702 = 'E7702',
        E7703 = 'E7703',
        E7704 = 'E7704',
        E7705 = 'E7705',
        E7706 = 'E7706',
        E7707 = 'E7707',
        E7708 = 'E7708',
        E7709 = 'E7709',
        E7710 = 'E7710',
        E7711 = 'E7711',
        E7712 = 'E7712',
    }
}
