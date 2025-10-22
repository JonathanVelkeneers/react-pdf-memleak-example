import type DataType from "../../data.json";
import type {TFunction} from "i18next";

export interface PdfTemplateProps {
    data: typeof DataType,
    t: TFunction<"translation", undefined>
}
