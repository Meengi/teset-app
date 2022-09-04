let RenderAllTree = () => {
console.log('Change')
};

let State = {
    dialogPage: {
        profiles: [
            {id:1, name:"Pavel Poltoraus", lastContent:"Ok", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg"},
            {id:2, name:"Artem Pavlov", lastContent:"Hay, what`s app?", img:"https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"},
            {id:3, name:"Pavel Ladbrook", lastContent:"No, i am.", img:"https://kartinkin.net/uploads/posts/2021-07/1626299023_28-kartinkin-com-p-krutaya-panda-art-art-krasivo-29.jpg"},
            {id:4, name:"Alex Poland", lastContent:"Bro, you ok?", img:"https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"},
            {id:5, name:"Debra Lookro", lastContent:"I am ok.?", img:"https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"},
            {id:6, name:"Petr Holleen", lastContent:"Yes, i do.", img:"https://fanibani.ru/images/wp-content/uploads/2021/06/na-avy-parni-35.jpg"},
        ],
        messages: [
            {id:1, message:"Hay"},
            {id:2, message:"Hello"},
            {id:3, message:"Hi, world!"},
            {id:4, message:"Good"},
            {id:5, message:"My name is Pavel"},
            {id:6, message:"Be careful"},
            {id:7, message:"No, thank you."},
        ],
    },
    profilePage: {
        comments: [
            {id:1, name:"Pavel Poltoraus", massage:"Ok, I like it is.", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg", like:"9"},
            {id:2, name:"Artem Pavlov", massage:"Yes, i do.", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg", like:"2"},
            {id:3, name:"Pavel Ladbrook", massage:"It is cool!!", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg", like:"6"},
            {id:4, name:"Alex Poland", massage:"Good", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg", like:"11"},
            {id:5, name:"Debra Lookro", massage:"Hahah ha", img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg", like:"4"}
        ],
        UpdateTextArea:'',
    }
};



export const AddComment = (NewMassage) => {
    debugger;
    let NewComment = {
        id:6,
        name:"Pavel Poltoraus",
        massage: NewMassage,
        img:"https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
        like:"0"
    };
    State.profilePage.comments.push(NewComment);
    State.profilePage.UpdateTextArea = '';
    RenderAllTree(State);
};

export const UpTextArea = (NewText) => {
    State.profilePage.UpdateTextArea = NewText;
    RenderAllTree(State);
}
export const Subscraber = (observer) => {
    RenderAllTree = observer;
}


export default State;