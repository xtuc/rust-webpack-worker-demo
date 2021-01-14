extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// Called by our JS entry point to run the example
#[wasm_bindgen]
pub fn get() -> String {
    "hi".to_string()
}
