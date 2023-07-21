#[
autogenerated by docgen
loc: /home/runner/work/nim/nim/lib/js/jsffi.nim(16, 1)
rdoccmd: 
]#
import std/assertions
import "/home/runner/work/nim/nim/lib/js/jsffi.nim"
{.line: ("/home/runner/work/nim/nim/lib/js/jsffi.nim", 16, 1).}:
  # Here, we are using jQuery for just a few calls and do not want to wrap the
  # whole library:

  # import the document object and the console
  var document {.importc, nodecl.}: JsObject
  var console {.importc, nodecl.}: JsObject
  # import the "$" function
  proc jq(selector: JsObject): JsObject {.importjs: "$$(#)".}

  # Use jQuery to make the following code run, after the document is ready.
  # This uses an experimental `.()` operator for `JsObject`, to emit
  # JavaScript calls, when no corresponding proc exists for `JsObject`.
  proc main =
    jq(document).ready(proc() =
      console.log("Hello JavaScript!")
    )
