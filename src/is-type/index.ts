/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： yangjianyun@58.com
 * @date: 2021-11-23 15:51:58
 * @description: 判断数据类型,返回布尔值
 *  js 常见的数据类型有 string boolean, number, null, undefined, object
 *   其中 object 还包括 null 和 []
 */


/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isString = (param: any): boolean => {
    return Object.prototype.toString.call(param) === "[object String]" || typeof param === "string"
}

/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isNumber = (param: any): boolean => {
    return Object.prototype.toString.call(param) === "[object Number]" || typeof param === "number"
}

/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isNull = (param: any): boolean => {
    return typeof param === "object" && Object.prototype.toString.call(param) === "[object Null]"
}

/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isUndefined = (param: any): boolean => {
    return typeof param === "undefined" || Object.prototype.toString.call(param) === '[object Undefined]'
}

/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isObject = (param: any): boolean => {
    return Object.prototype.toString.call(param) === "[object Object]"
}

/**
 * @param param 传入一个任意参数
 * @return type 布尔值
 */
export const isArray = (param: any): boolean => {
    return Object.prototype.toString.call(param) === "[object Array]"
}

export const isFunction = (param: any): boolean => {
    return Object.prototype.toString.call(param) === "[object Function]"
}