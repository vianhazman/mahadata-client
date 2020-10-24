import { GoogleSpreadsheet } from "google-spreadsheet";

export default class EventService {
  constructor() {
    this.SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    this.CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    this.PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

    this.doc = new GoogleSpreadsheet(this.SPREADSHEET_ID);
  }

  async get(sheet_id) {
    try {
      await this.doc.useServiceAccountAuth({
        client_email: this.CLIENT_EMAIL,
        private_key: this.PRIVATE_KEY,
      });
      await this.doc.loadInfo();
      const sheet = this.doc.sheetsById[sheet_id];
      return await sheet.getRows();
    } catch (e) {
      console.error("Error: ", e);
    }
  }
}
