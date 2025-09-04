import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as path from 'path';


@Injectable()
export class GoogleDriveService {
  private drive;

  constructor() {
    const auth = new google.auth.GoogleAuth({
      keyFile: './google-clound.json', 
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    this.drive = google.drive({ version: 'v3', auth });
  }

  async listFilesInFolder(folderId: string) {
    const res = await this.drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name)',
    });

    return res.data.files || [];
  }

  getPublicLink(fileId: string) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
}
