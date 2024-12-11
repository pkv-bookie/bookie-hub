import { StorageConstant } from "@define/storage.constant";
import { ICompany } from "@interfaces/company.interface";
import { setStorageByKey } from "@utils/storage";
import { atom } from "recoil";

export const companyState = atom<ICompany | undefined>({
    key: StorageConstant.COMPANY,
    default: undefined,
    effects: [
        ({ onSet }) => {
            onSet(newCompany => {
                setStorageByKey(StorageConstant.COMPANY, newCompany);
            });
        },
    ],
});

export const loadingState = atom<boolean>({
    key: "loading_global",
    default: false,
});

export const callClientState = atom<boolean>({
    key: "call_lient_global",
    default: false,
});
