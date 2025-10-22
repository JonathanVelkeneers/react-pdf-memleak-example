import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {renderToBuffer} from '@react-pdf/renderer';
import {PdfTemplate} from "./pdf-generator/src/pdf-template";
import * as process from "node:process";
import data from './data.json' with {type: 'json'};


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '..', 'output');


async function main(): Promise<void> {
    console.log(`Starting processing of PDF`);
    try {
        const startTime = Date.now();

        await fs.mkdir(outputDir, {recursive: true});
        const outputPath = path.join(outputDir, "pdf-file.pdf");

        const outputBuffer = await renderToBuffer(PdfTemplate({data: data, language: "en"}));

        await fs.writeFile(outputPath, outputBuffer)

        const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);

        console.log(`\n📊 Processing Summary:`);
        console.log(`⏱️  Total time: ${totalDuration}s`);
    } catch (error) {
        console.error('💥 Error processing PDFs:', error);
        process.exit(1);
    }
}

await main();
