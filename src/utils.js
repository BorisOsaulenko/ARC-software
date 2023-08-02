import { FaHeart, FaKeyboard, FaEye, FaHandshake, FaAd, FaQuestion, FaCommentDots, FaCodeBranch } from "react-icons/fa"

export const getStats = () => {
    return [
        {'name': 'Followers', 'value': 0, 'hint': 'See follower list', 'hintUrl': '/statistics/#followers'},
        {'name': 'Posts', 'value': 0, 'hint': 'See posts list', 'hintUrl': '/statistics/#posts'},
        {'name': 'Views', 'value': 0, 'hint': 'See views list', 'hintUrl': '/statistics/#views'},
        {'name': 'Likes', 'value': 0, 'hint': 'See likes list', 'hintUrl': '/statistics/#likes'},
        {'name': 'Subscriptions', 'value': 0, 'hint': 'See subscriptions list', 'hintUrl': '/statistics/#subscriptions'},
        {'name': 'Account creation date', 'value': '2022.10.04', 'hint': 'See account history', 'hintUrl': '/statistics/#account'}
    ]
}

export const getSidebarButtons = () => {
    return [ // 3 types of dropdowns: link - default, value, input
        {name: 'Followers', icon: FaHeart, dropdowns: [{name: 'See followers list', link: '/statistics#followers/?type=list'}, {name: 'Followers statistics', link: '/statistics#followers?type=graph'}, {name: 'Followers: ', value: 0}]},
        {name: 'Posts', icon: FaKeyboard, dropdowns: [{name: 'See posts list', link: '/statistics#posts/?type=list'}, {name: 'Posts statistics', link: '/statistics#posts?type=graph'}, {name: 'Posts: ', value: 0}]},
        {name: 'Trends', icon: FaAd, link: '/trends'},
        {name: 'Views', icon: FaEye, dropdowns: [{name: 'See views statistics', link: '/statistics#views?type=list'}, {name: 'Views graph', link: '/statistics#views?type=graph'}, {name: 'Views: ', value: 0}]},
        {name: 'Subscriptions', icon: FaHandshake, dropdowns: [{name: 'See subscriptions list', link: '/statistics#subscriptions?type=list'}, {name: 'Manage subscriptions', link: '/statistics#subscriptions?type=list'}, {name: 'Subscriptions: ', value: 0}]},
    ]
}

export const getSidebarHelperButtons = () => {
    return [
        {name: 'Q&A', icon: FaQuestion, dropdowns: [{name: 'See Q&A page', link: '/Q&A'}, {name: 'Look for questions: ', placeholder: 'Keywords:'}]},
        {name: 'Forum', icon: FaCommentDots, link: '/Forum'},
        {name: 'Changelog', icon: FaCodeBranch, link: '/changelog'},
    ]
}