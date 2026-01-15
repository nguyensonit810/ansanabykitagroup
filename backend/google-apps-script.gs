
/**
 * Google Apps Script for Ansana by Kita Lead System
 * Created for: ansana.bykita.vn
 */

function doPost(e) {
  try {
    // Parse the JSON data from the request body
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet (Active one or by ID)
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Leads") || ss.getSheets()[0];
    
    // Check if header exists, if not create it
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Thời gian đăng ký", "Họ và tên", "Số điện thoại", "Email", "Loại quan tâm"]);
      // Format header
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f3f4f6");
    }
    
    // Prepare the data row
    const row = [
      new Date(), // Server timestamp
      data.fullName || "N/A",
      data.phone || "N/A",
      data.email || "N/A",
      data.interest || "N/A"
    ];
    
    // Append to sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET request (optional, for testing)
function doGet(e) {
  return ContentService.createTextOutput("Ansana by Kita Lead API is Running.");
}
