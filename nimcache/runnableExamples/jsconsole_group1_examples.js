/* Generated by the Nim Compiler v1.9.5 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555833 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555179 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555178 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555176 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555176 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555176.node = NNI33555176;
NTI33555178.base = NTI33555175;
NTI33555179.base = NTI33555175;
var NNI33555175 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555178, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555179, name: "up", sons: null}]};
NTI33555175.node = NNI33555175;
var NNI33555171 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555171.node = NNI33555171;
NTI33555175.base = NTI33555171;
NTI33555176.base = NTI33555175;
NTI134217745.base = NTI33555176;
var NNI33555833 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555833.node = NNI33555833;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555176;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555176;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557264, src_33557265, ti_33557266) {
  var result_33557275 = null;

    switch (ti_33557266.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557255(ti_33557266))) {
      result_33557275 = src_33557265;
      }
      else {
        result_33557275 = [src_33557265[0], src_33557265[1]];
      }
      
      break;
    case 19:
            if (dest_33557264 === null || dest_33557264 === undefined) {
        dest_33557264 = {};
      }
      else {
        for (var key in dest_33557264) { delete dest_33557264[key]; }
      }
      for (var key in src_33557265) { dest_33557264[key] = src_33557265[key]; }
      result_33557275 = dest_33557264;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557266.base == null))) {
      result_33557275 = nimCopy(dest_33557264, src_33557265, ti_33557266.base);
      }
      else {
      if ((ti_33557266.kind == 17)) {
      result_33557275 = (dest_33557264 === null || dest_33557264 === undefined) ? {m_type: ti_33557266} : dest_33557264;
      }
      else {
        result_33557275 = (dest_33557264 === null || dest_33557264 === undefined) ? {} : dest_33557264;
      }
      }
      nimCopyAux(result_33557275, src_33557265, ti_33557266.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557265)) { 
        if(dest_33557264 === null || dest_33557264 === undefined || dest_33557264.length != src_33557265.length) {
          dest_33557264 = new src_33557265.constructor(src_33557265);
        } else {
          dest_33557264.set(src_33557265, 0);
        }
        result_33557275 = dest_33557264;
      } else {
        if (src_33557265 === null) {
          result_33557275 = null;
        }
        else {
          if (dest_33557264 === null || dest_33557264 === undefined || dest_33557264.length != src_33557265.length) {
            dest_33557264 = new Array(src_33557265.length);
          }
          result_33557275 = dest_33557264;
          for (var i = 0; i < src_33557265.length; ++i) {
            result_33557275[i] = nimCopy(result_33557275[i], src_33557265[i], ti_33557266.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557265 === null) {
        result_33557275 = null;
      }
      else {
        if (dest_33557264 === null || dest_33557264 === undefined || dest_33557264.length != src_33557265.length) {
          dest_33557264 = new Array(src_33557265.length);
        }
        result_33557275 = dest_33557264;
        for (var i = 0; i < src_33557265.length; ++i) {
          result_33557275[i] = nimCopy(result_33557275[i], src_33557265[i], ti_33557266.base);
        }
      }
    
      break;
    case 28:
            if (src_33557265 !== null) {
        result_33557275 = src_33557265.slice(0);
      }
    
      break;
    default: 
      result_33557275 = src_33557265;
      break;
    }

  return result_33557275;

}

function arrayConstr(len_33557310, value_33557311, typ_33557312) {
        var result = new Array(len_33557310);
    for (var i = 0; i < len_33557310; ++i) result[i] = nimCopy(null, value_33557311, typ_33557312);
    return result;
  

  
}

function mnewString(len_33556999) {
        return new Array(len_33556999);
  

  
}

function addInt(a_33557046, b_33557047) {
        var result = a_33557046 + b_33557047;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557320, a_33557321, b_33557322) {
  var result_33557323 = 0;

  BeforeRet: {
    if (((a_33557321 <= i_33557320) && (i_33557320 <= b_33557322))) {
    result_33557323 = i_33557320;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557323;

}

function chckIndx(i_33557315, a_33557316, b_33557317) {
  var result_33557318 = 0;

  BeforeRet: {
    if (((a_33557316 <= i_33557315) && (i_33557315 <= b_33557317))) {
    result_33557318 = i_33557315;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557315, a_33557316, b_33557317);
    }
    
  };

  return result_33557318;

}

function cstrToNimstr(c_33556894) {
      var ln = c_33556894.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556894.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556894.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556897) {
  var result_33556898 = null;

    var res_33556939 = newSeq_33556915((s_33556897).length);
    var i_33556940 = 0;
    var j_33556941 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556940 < (s_33556897).length)) break Label2;
          var c_33556942 = s_33556897[i_33556940];
          if ((c_33556942 < 128)) {
          res_33556939[j_33556941] = String.fromCharCode(c_33556942);
          i_33556940 += 1;
          }
          else {
            var helper_33556955 = newSeq_33556915(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556956 = c_33556942.toString(16);
                  if ((((code_33556956) == null ? 0 : (code_33556956).length) == 1)) {
                  helper_33556955.push("%0");;
                  }
                  else {
                  helper_33556955.push("%");;
                  }
                  
                  helper_33556955.push(code_33556956);;
                  i_33556940 += 1;
                  if ((((s_33556897).length <= i_33556940) || (s_33556897[i_33556940] < 128))) {
                  break Label3;
                  }
                  
                  c_33556942 = s_33556897[i_33556940];
                }
            };
++excHandler;
            try {
            res_33556939[j_33556941] = decodeURIComponent(helper_33556955.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556939[j_33556941] = helper_33556955.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556941 += 1;
        }
    };
    if (res_33556939.length < j_33556941) { for (var i = res_33556939.length ; i < j_33556941 ; ++i) res_33556939.push(null); }
               else { res_33556939.length = j_33556941; };
    result_33556898 = res_33556939.join("");

  return result_33556898;

}

function raiseException(e_33556649, ename_33556650) {
    e_33556649.name = ename_33556650;
    if ((excHandler == 0)) {
    unhandledException(e_33556649);
    }
    
    e_33556649.trace = nimCopy(null, rawWriteStackTrace_33556600(), NTI33554449);
    throw e_33556649;

  
}

function makeNimstrLit(c_33556891) {
      var result = [];
  for (var i = 0; i < c_33556891.length; ++i) {
    result[i] = c_33556891.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557255(ti_33557256) {
  var result_33557257 = false;

  BeforeRet: {
    result_33557257 = !((ConstSet1[ti_33557256.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557257;

}

function nimCopyAux(dest_33557268, src_33557269, n_33557270) {
    switch (n_33557270.kind) {
    case 0:
      break;
    case 1:
            dest_33557268[n_33557270.offset] = nimCopy(dest_33557268[n_33557270.offset], src_33557269[n_33557270.offset], n_33557270.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557270.sons.length; i++) {
      nimCopyAux(dest_33557268, src_33557269, n_33557270.sons[i]);
    }
    
      break;
    case 3:
            dest_33557268[n_33557270.offset] = nimCopy(dest_33557268[n_33557270.offset], src_33557269[n_33557270.offset], n_33557270.typ);
      for (var i = 0; i < n_33557270.sons.length; ++i) {
        nimCopyAux(dest_33557268, src_33557269, n_33557270.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556369(x_33556370, x_33556370_Idx, y_33556371) {
          if (x_33556370[x_33556370_Idx] === null) { x_33556370[x_33556370_Idx] = []; }
      var off = x_33556370[x_33556370_Idx].length;
      x_33556370[x_33556370_Idx].length += y_33556371.length;
      for (var i = 0; i < y_33556371.length; ++i) {
        x_33556370[x_33556370_Idx][off+i] = y_33556371.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557044) {
        if (a_33557044 > 2147483647 || a_33557044 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556808, a_33556809, b_33556810) {
    var Temporary1;

    if ((b_33556810 < a_33556809)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556808) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556809) || [],[32,46,46,32] || [],HEX24_369098760(b_33556810) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    F.filename = "digitsutils.nim";
    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    F.line = 44;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = chckRange(addInt(old_301990096, n_301990095), 0, 2147483647), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      F.line = 46;
      var iHEX60gensym4_301990110 = 0;
      F.line = 119;
      F.filename = "iterators_1.nim";
      var i_654311460 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311460 < n_301990095)) break Label4;
            F.line = 49;
            F.filename = "digitsutils.nim";
            iHEX60gensym4_301990110 = i_654311460;
            F.line = 49;
            result_301990092[result_301990092_Idx][chckIndx(addInt(old_301990096, iHEX60gensym4_301990110), 0, (result_301990092[result_301990092_Idx]).length - 1)] = x_301990093.charCodeAt(chckIndx(addInt(start_301990094, iHEX60gensym4_301990110), 0, (x_301990093).length - 1));
            F.line = 122;
            F.filename = "iterators_1.nim";
            i_654311460 = addInt(i_654311460, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990086(result_301990088, result_301990088_Idx, x_301990089) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    F.filename = "digitsutils.nim";
    addChars_301990090(result_301990088, result_301990088_Idx, x_301990089, 0, ((x_301990089) == null ? 0 : (x_301990089).length));
  framePtr = F.prev;

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 111;
    F.filename = "digitsutils.nim";
    addChars_301990086(result_301990112, result_301990112_Idx, ((x_301990113) + ""));
  framePtr = F.prev;

  
}

function addInt_301990129(result_301990130, result_301990130_Idx, x_301990131) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 115;
    F.filename = "digitsutils.nim";
    addInt_301990111(result_301990130, result_301990130_Idx, BigInt(x_301990131));
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    F.filename = "dollars.nim";
    addInt_301990129(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556504(f_33556505) {
  var result_33556506 = [[]];

    var it_33556514 = f_33556505;
    var i_33556515 = 0;
    var total_33556516 = 0;
    var tempFrames_33556517 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555833);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556514 == null)) && (i_33556515 <= 63))) break Label2;
          tempFrames_33556517[i_33556515].Field0 = it_33556514.procname;
          tempFrames_33556517[i_33556515].Field1 = it_33556514.line;
          tempFrames_33556517[i_33556515].Field2 = it_33556514.filename;
          i_33556515 += 1;
          total_33556516 += 1;
          it_33556514 = it_33556514.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556514 == null))) break Label4;
          total_33556516 += 1;
          it_33556514 = it_33556514.prev;
        }
    };
    result_33556506[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556516 == i_33556515))) {
    result_33556506[0].push.apply(result_33556506[0], [40]);;
    result_33556506[0].push.apply(result_33556506[0], HEX24_369098760((total_33556516 - i_33556515)));;
    result_33556506[0].push.apply(result_33556506[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556550 = 0;
      var colontmp__654311452 = 0;
      colontmp__654311452 = (i_33556515 - 1);
      var res_654311454 = colontmp__654311452;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311454)) break Label7;
            j_33556550 = res_654311454;
            result_33556506[0].push.apply(result_33556506[0], cstrToNimstr(tempFrames_33556517[j_33556550].Field2));;
            if ((0 < tempFrames_33556517[j_33556550].Field1)) {
            result_33556506[0].push.apply(result_33556506[0], [40]);;
            addInt_301990129(result_33556506, 0, tempFrames_33556517[j_33556550].Field1);
            if (false) {
            result_33556506[0].push.apply(result_33556506[0], [44,32]);;
            addInt_301990129(result_33556506, 0, 0);
            }
            
            result_33556506[0].push.apply(result_33556506[0], [41]);;
            }
            
            result_33556506[0].push.apply(result_33556506[0], [32,97,116,32]);;
            add_33556369(result_33556506, 0, tempFrames_33556517[j_33556550].Field0);
            result_33556506[0].push.apply(result_33556506[0], [10]);;
            res_654311454 -= 1;
          }
      };
    };

  return result_33556506[0];

}

function rawWriteStackTrace_33556600() {
  var result_33556601 = [];

    if (!((framePtr == null))) {
    result_33556601 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556504(framePtr) || []), NTI33554449);
    }
    else {
      result_33556601 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556601;

}

function newSeq_33556915(len_33556917) {
  var result_33556918 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 625;
    F.filename = "system.nim";
    result_33556918 = new Array(len_33556917); for (var i = 0 ; i < len_33556917 ; ++i) { result_33556918[i] = null; }  framePtr = F.prev;

  return result_33556918;

}

function unhandledException(e_33556645) {
    var buf_33556646 = [[]];
    if (!(((e_33556645.message).length == 0))) {
    buf_33556646[0].push.apply(buf_33556646[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556646[0].push.apply(buf_33556646[0], e_33556645.message);;
    }
    else {
    buf_33556646[0].push.apply(buf_33556646[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556646[0].push.apply(buf_33556646[0], [32,91]);;
    add_33556369(buf_33556646, 0, e_33556645.name);
    buf_33556646[0].push.apply(buf_33556646[0], [93,10]);;
    buf_33556646[0].push.apply(buf_33556646[0], rawWriteStackTrace_33556600());;
    var cbuf_33556647 = toJSStr(buf_33556646[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556647);
  }
  else {
    throw cbuf_33556647;
  }
  

  
}

function sysFatal_268435501(message_268435504) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    F.filename = "fatal.nim";
    raiseException({message: nimCopy(null, message_268435504, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435499(msg_268435500) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    F.filename = "assertions.nim";
    sysFatal_268435501(msg_268435500);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435541(msg_268435542) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/nim/nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    F.filename = "assertions.nim";
    raiseAssert_268435499(msg_268435542);
  framePtr = F.prev;

  
}
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
F.line = 101;
F.filename = "jsconsole.nim";
console.assert(true, "[jsAssert] /home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(9, 10)","42 == 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(10, 10)","42 != 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(11, 10)","\'`\' == \'\\n\' and \'\\t\' == \'\\x00\'");
if (false) {
F.line = 101;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(12, 3) `42 == 42` "));
}

framePtr = F.prev;
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/nim/nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;