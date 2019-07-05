// Import the mount() method from the test utils
// and the component you want to test
var request = require('request');
import { mount } from '@vue/test-utils';
import Counter from './counter';
// import { StoreState } from '../types';


// describe('Counter', () => {
//     // Now mount the component and you have the wrapper
//     const wrapper = mount(Counter)

//     it('renders the correct markup', () => {
//         expect(wrapper.html()).toContain('<span class="count">0</span>')
//     })

//     // it's also easy to check for the existence of elements
//     it('has a button', () => {
//         expect(wrapper.contains('button')).toBe(true)
//     })

//     it('button should increment the count', () => {
//         expect(wrapper.vm.count).toBe(0)
//         const button = wrapper.find('button')
//         button.trigger('click')
//         expect(wrapper.vm.count).toBe(1)
//     })
// })


// var interface=[{
//     "key" : "get modal data where type=3",
//     "url" : 'http://dev2.weixin.oa.com/wego/wecapacityapi/capacity/model?action=get&type=3'
// }]
var f_class2type = {} ;
"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(e,i){
    f_class2type[ "[object " + e + "]" ] = e.toLowerCase();
}) ;

function _typeof(obj){
    if ( obj == null ){
        return String( obj );
    }
    return typeof obj === "object" || typeof obj === "function" ?
        f_class2type[ f_class2type.toString.call(obj) ] || "object" :
        typeof obj;
}


function isObjectValueEqual(a, b) {
    /*
    * @Author: floralin
    * @Date:   2017-08-09 11:14:15
    * @Last Modified by:   floralin
    * @Last Modified time: 2017-08-09 20:58:00
    * @Desc: 递归判断两个对象是否相等
    */
    for (var aProps in a) {
        var propName = aProps;
        // If values of same property are not equal,
        // objects are not equivalent
        if (_typeof(a[propName]) != _typeof(b[propName])) {
            return false
        } else if (
            ["string", "number", "boolean", "undefined", "null"].includes(_typeof(a[propName])) &&
            ["string", "number", "boolean", "undefined", "null"].includes(_typeof(b[propName]))) {

            if (a[propName] !== b[propName]) {
                return false;
            }
        } else if (_typeof(a[propName]) == "function") {
            if (a[propName].toString() != b[propName].toString()) {
                return false;
            };
        } else {
            return isObjectValueEqual(a[propName], b[propName])
        }
    }
    return true;
}

var obj1 = {
    name: "xiannv",
    sex: "female",
    jump: function() {

    },
    children: [{
        name: "flora",
        age: 12
    }],
};

var obj2 = {
    name: "xiannv",
    sex: "female",
    jump: function() {

    },
    children: [{
        name: "flora",
        age: 12
    }],

};
console.log(isObjectValueEqual(obj1, obj2) && isObjectValueEqual(obj2, obj1));



var it_name ='get modal data where type=3'
describe('Interface Test', function() {
    it(it_name, function() {
        var p = new Promise(function(resolve) {
            request('http://xxxxx/wego/wecapacityapi/capacity/model?action=get&type=1', function(err, res, body) {
                resolve(res);
                // console.info(body)
                //-------------------------存储返回结果快照-----------------------
                //expect(body).toMatchSnapshot();

                if(body.code==0){
                    console.info(" √  return code=0 , "+it_name)
                }
                // expect(body).toBe(JSON.stringify( {"data":null,"code":0,"msg":"0"}))
            });
           
        });
        return p.then(function(res) {
            expect(res.statusCode).toBe(200);
            
        });
    });
});


