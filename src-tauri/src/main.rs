// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn my_custom_command() {
    println!("Hello, world from rust!");
}

#[tauri::command]
fn show_city(city: &str) {
    println!("This is my city: {}", city);
}

#[tauri::command]
fn hello_user(username: String) -> Result<String, String> {
    // format!("Hello {} from Rust ", username).into()
    Err("This is an error from Rust".into())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            my_custom_command,
            show_city,
            hello_user
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
