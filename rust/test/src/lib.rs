use neon::prelude::*;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
  
    Ok(cx.string("hello node from rust"))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("hello", hello)?;
    Ok(())
}
