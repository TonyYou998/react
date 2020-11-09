let initialState = {//khai bao store 
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 2,
            name: "hao",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 3,
            name: "tan",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
    ],
    userEdit: null,
    keyword: "",
};

const userReducer = (state = initialState, action) => {//state này nè bớt chế dùm con

    switch (action.type) {
        case "DELETE":

            let userList = [...state.userList];
            userList = userList.filter((user) => {
                //trả về obj có id khác với id của action.payload.id truyền vào
                return user.id !== action.payload.id;

            });
            //state lấy ở trên xuống kìa cha nội
            state.userList = userList;//lấy userlist vua loc dc gan vao lam userlis moi
            return { ...state };//cap nhat==this.setstate

        case "EDIT_USER":
            state.userEdit = action.payload;

            return { ...state };
        case "SUBMIT": {
            let userList = [...state.userList];
            if (action.payload.id) {
                //UPDATE
                const index = userList.findIndex((user) => {
                    return user.id === action.payload.id;
                });
                if (index !== -1) {
                    userList[index] = action.payload;
                }
            } else {
                //ADD
                const userNew = { ...action.payload, id: Math.random() };
                userList = [...state.userList, userNew];
            }
            state.userList = userList;
            return { ...state };
        }
        case "SEARCH":
            state.keyword = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
};

export default userReducer;
