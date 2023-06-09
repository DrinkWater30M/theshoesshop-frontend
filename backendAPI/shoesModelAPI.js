import axiosClientPublic from "./axiosClientPublic";

const shoesModelAPI = {
    getShoesModelList: async (params) => {
        const url = `/api/shoesmodel/list`;
        const res = await axiosClientPublic.get(
            url,
            {
                params: params
            }
        )

        return res;
    },

    getShoesModelCount: async () => {
        const url = `/api/shoesmodel/list/count`;
        const res = await axiosClientPublic.get(url);

        return res;
    },

    getShoesModelByID: async (shoesModelID) => {
            const url = `/api/shoesmodel/${shoesModelID}`;
            const res = await axiosClientPublic.get(url);
            return res;
    }
}

export default shoesModelAPI;