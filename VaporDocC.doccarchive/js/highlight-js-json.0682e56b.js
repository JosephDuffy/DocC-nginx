(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["highlight-js-json"],{"5ad2":function(n,e){function i(n){const e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],t={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},l={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(t,{begin:/:/})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(t)],illegal:"\\S"};return a.push(l,s),i.forEach((function(n){a.push(n)})),{name:"JSON",contains:a,keywords:e,illegal:"\\S"}}n.exports=i}}]);