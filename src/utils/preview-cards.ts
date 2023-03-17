// @ts-ignore

export interface Card {
    title: string,
    content: string,
    cover: string,
    topic: {
        name: string
    },
    author: {
        id: bigint,
        name: string,
        avatar: string
    }
    id: bigint
    time_info: { created_date_time: string, last_modified_date: string }
}

const current = new Date().toDateString()
export const previewCard: Card = {
    id: BigInt(1),
    title: "丙寅天津竹枝词",
    content: "俗尚原无理可推，人情大半为求财。\n谷糠未引钱龙至， 鼠猬先驮宝藏来。",
    cover: "",
    topic: {name: "鼠鼠"},
    author: {
        id: BigInt(1),
        name: "冯文洵",
        avatar: "string",
    },
    time_info: {created_date_time: current, last_modified_date: current}
}
export const previewCards: Card[] = []
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "诗经·国风·魏风·硕鼠"
previewCard.content = "硕鼠硕鼠，无食我黍！三岁贯汝，莫我肯顾。逝将去汝，适彼乐土。乐土乐土 ，爰得我所。"
previewCard.author = {
    id: BigInt(1),
    name: "佚名",
    avatar: "string",
}
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "鼫鼠赞"
previewCard.content = "五能之鼠，技无所执。应气而化，翻飞鴽集。诗人歌之，无食我粒。"
previewCard.author = {
    id: BigInt(1),
    name: "郭璞",
    avatar: "string",
}
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "禽虫十二章"
previewCard.content = "一鼠得仙生羽翼，众鼠相看有羡色。岂知飞上未半空，已作乌鸢口中食。"
previewCard.author = {
    id: BigInt(1),
    name: "白居易",
    avatar: "string",
}
previewCards.push(Object.assign({}, previewCard))