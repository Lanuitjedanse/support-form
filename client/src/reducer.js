export default function (state = {}, action) {
    // if (action.type == "RECEIVE_GENRES") {
    //     state = {
    //         ...state,
    //         musicGenres: action.musicGenres,
    //     };
    // }

    // if (action.type == "RECEIVE_PREF_USER") {
    //     state = {
    //         ...state,
    //         musicTaste: action.musicTaste,
    //     };
    // }
    // if (action.type === "ADD_LIKE") {
    //     state = {
    //         ...state,
    //         musicGenres: state.musicGenres.map((music) => {
    //             if (music.genre === action.genreId) {
    //                 return {
    //                     ...music,
    //                     giveLike: true,
    //                 };
    //             } else {
    //                 return music;
    //             }
    //         }),
    //         musicTaste: state.musicTaste && [
    //             {
    //                 ...state.musicTaste[0],
    //                 [action.genreId]: true,
    //             },
    //         ],
    //     };
    // } else if (action.type === "ADD_NO_LIKE") {
    //     state = {
    //         ...state,
    //         musicGenres: state.musicGenres.map((music) => {
    //             if (music.genre === action.genreId) {
    //                 return {
    //                     ...music,
    //                     giveLike: false,
    //                 };
    //             } else {
    //                 return music;
    //             }
    //         }),
    //         musicTaste: state.musicTaste && [
    //             {
    //                 ...state.musicTaste[0],
    //                 [action.genreId]: false,
    //             },
    //         ],
    //     };
    // }

    // if (action.type == "SHOW_ALL_BARS") {
    //     state = {
    //         ...state,
    //         allBars: action.allBars,
    //     };
    // }

    // if (action.type == "NEW_BAR") {
    //     state = {
    //         ...state,
    //         allBars: [...state.allBars, action.newBar],
    //     };
    // }

    // if (action.type === "SHOW_COMMENTS") {
    //     state = {
    //         ...state,
    //         comments: action.comments,
    //         cookie: action.cookie,
    //     };
    // }
    // if (action.type === "SEND_COMMENT") {
    //     state = {
    //         ...state,
    //         comment: action.comment,
    //     };
    // }
    // if (action.type === "SHOW_NEW_COMMENT") {
    //     state = {
    //         ...state,
    //         comments: [...state.comments, action.newComment],
    //     };
    // }

    // if (action.type === "DELETE_BAR") {
    //     state = {
    //         ...state,
    //         allBars: state.allBars.filter((item) => action.deletedBar !== item),
    //     };
    // }

    // if (action.type === "LAST_BAR") {
    //     state = {
    //         ...state,
    //         lastBar: action.lastBar,
    //         creator: action.creator,
    //     };
    // }
    // if (action.type === "SHOW_ALL_MY_POSTS") {
    //     state = {
    //         ...state,
    //         allMyPosts: action.allMyPosts,
    //     };

    return state;
}
