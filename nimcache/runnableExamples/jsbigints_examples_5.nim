#[
autogenerated by docgen
loc: /home/runner/work/nim/nim/lib/std/jsbigints.nim(57, 3)
rdoccmd: 
]#
import std/assertions
import "/home/runner/work/nim/nim/lib/std/jsbigints.nim"
{.line: ("/home/runner/work/nim/nim/lib/std/jsbigints.nim", 57, 3).}:
  doAssert (big("3") + big("2") ** big("66")).wrapToInt(13) == big("3")
