import { getStorage, setStorage } from "zmp-sdk";

export const setStorageByKey = async (key: string, value: any) => {
    try {
        const { errorKeys } = await setStorage({
            data: {
                [key]: value,
            },
        });

        return errorKeys;
    } catch (error) {
        // xử lý khi gọi api thất bại
        console.log(error);
    }
    return null;
};

export const getStorageByKey = async (key: string) => {
    try {
        const storageData = await getStorage({
            keys: [key],
        });

        return storageData?.[key];
    } catch (error) {
        // xử lý khi gọi api thất bại
        console.log(error);
    }
    return null;
};
