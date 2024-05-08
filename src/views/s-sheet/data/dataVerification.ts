const data = {
  name: 'dataVerification',
  status: 1,
  order: 0,
  id: '67ec0341-3741-45cb-8fd7-aaf97362ebd7',
  row: 84,
  column: 60,
  config: {},
  pivotTable: null,
  isPivotTable: false,
  color: null,

  celldata: [
    {
      r: 0,
      c: 0,
      v: {
        m: '2',
        ct: {
          fa: 'General',
          t: 'n',
        },
        v: '2',
      },
    },
    {
      r: 0,
      c: 1,
      v: {
        m: 'a,b,c',
        ct: {
          fa: 'General',
          t: 'g',
        },
        v: 'a,b,c',
      },
    },
    {
      r: 0,
      c: 2,
      v: {
        m: 'b',
        ct: {
          fa: 'General',
          t: 'g',
        },
        v: 'b',
      },
    },
    {
      r: 0,
      c: 3,
      v: {
        v: '14209083729',
        ct: {
          fa: 'General',
          t: 'n',
        },
        m: '14209083729',
      },
    },
    {
      r: 1,
      c: 0,
      v: {
        v: '2',
        ct: {
          fa: 'General',
          t: 'n',
        },
        m: '2',
      },
    },
    {
      r: 1,
      c: 1,
      v: {
        v: '3',
        ct: {
          fa: 'General',
          t: 'n',
        },
        m: '3',
      },
    },
    {
      r: 1,
      c: 2,
      v: {
        m: 'abc',
        ct: {
          fa: 'General',
          t: 'g',
        },
        v: 'abc',
      },
    },
    {
      r: 1,
      c: 3,
      v: {
        m: 'aaaa',
        ct: {
          fa: 'General',
          t: 'g',
        },
        v: 'aaaa',
      },
    },
  ],
  dataVerification: {
    '0_0': {
      type: 'dropdown',
      type2: '',
      rangeTxt: 'A1',
      value1: '1,2,3,4,a',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: true,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
    '0_1': {
      type: 'dropdown',
      type2: 'true',
      rangeTxt: 'B1',
      value1: 'a,b,c,d',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: false,
      hintShow: false,
      hintValue: '',
      checked: false,
    },
    '0_2': {
      type: 'checkbox',
      type2: '',
      rangeTxt: 'C1',
      value1: 'a',
      value2: 'b',
      validity: '',
      remote: false,
      prohibitInput: false,
      hintShow: true,
      hintValue: '自定义',
      checked: false,
    },
    '0_3': {
      type: 'validity',
      type2: 'phoneNumber',
      rangeTxt: 'D1',
      value1: '',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: false,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
    '1_0': {
      type: 'number',
      type2: 'between',
      rangeTxt: 'A2',
      value1: '1',
      value2: '3',
      validity: '',
      remote: false,
      prohibitInput: true,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
    '1_1': {
      type: 'number_integer',
      type2: 'equal',
      rangeTxt: 'B2',
      value1: '2',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: false,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
    '1_2': {
      type: 'text_content',
      type2: 'include',
      rangeTxt: 'C2',
      value1: 'a',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: false,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
    '1_3': {
      type: 'text_length',
      type2: 'greaterOrEqualTo',
      rangeTxt: 'D2',
      value1: '3',
      value2: '',
      validity: '',
      remote: false,
      prohibitInput: true,
      hintShow: true,
      hintValue: '',
      checked: false,
    },
  },
};
export default data;
