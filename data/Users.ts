interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  isOnline: boolean;
}

const users: User[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    username: "nguyenvana",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Xin chào!",
    lastMessageTime: "10:30",
    isOnline: true,
  },
  {
    id: "2",
    name: "Trần Thị B",
    username: "tranthib",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Hôm nay thế nào?",
    lastMessageTime: "10:30",
    isOnline: false,
  },
  {
    id: "3",
    name: "Lê Văn C",
    username: "levanc",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Gửi tôi tài liệu nhé!",
    lastMessageTime: "10:30",
    isOnline: true,
  },
  {
    id: "4",
    name: "Phạm Thị D",
    username: "phamthid",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "OK, cảm ơn!",
    lastMessageTime: "10:30",
    isOnline: false,
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    username: "hoangvane",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Đang làm gì đó?",
    lastMessageTime: "10:30",
    isOnline: true,
  },
  {
    id: "6",
    name: "Đỗ Thị F",
    username: "dothif",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Gặp nhau lúc 3h nhé!",
    lastMessageTime: "10:30",
    isOnline: false,
  },
  {
    id: "7",
    name: "Vũ Văn G",
    username: "vuvang",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Tôi sẽ gọi lại sau.",
    lastMessageTime: "10:30",
    isOnline: true,
  },
  {
    id: "8",
    name: "Bùi Thị H",
    username: "buithih",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Nghe nhạc đi!",
    lastMessageTime: "10:30",
    isOnline: false,
  },
  {
    id: "9",
    name: "Lương Văn I",
    username: "luongvani",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Bạn khỏe không?",
    lastMessageTime: "10:30",
    isOnline: true,
  },
  {
    id: "10",
    name: "Đinh Thị J",
    username: "dinhthij",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Tôi đã nhận được hàng rồi!",
    lastMessageTime: "10:30",
    isOnline: false,
  },
  {
    id: "11",
    name: "Đinh Thị J",
    username: "dinhthij",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    lastMessage: "Tôi đã nhận được hàng rồi!",
    lastMessageTime: "10:30",
    isOnline: false,
  },
];

export default users;
