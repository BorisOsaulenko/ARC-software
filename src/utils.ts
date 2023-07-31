export const getName = () => {
    return JSON.parse(String(localStorage.getItem('user'))).name
}
export const getPictureUrl = () => {
    return JSON.parse(String(localStorage.getItem('user'))).picture
}
export const getHomeStats = () => {
    return [                    // value will be got through DB
        {'stat': 'Followers', 'value': 5, 'hint': 'See followers list', 'hintUrl': '/statistics#followers'}, 
        {'stat': 'Posts', 'value': 10, 'hint': 'See posts list', 'hintUrl': '/statistics#posts'},
        {'stat': 'Subscriptions', 'value': 2, 'hint': 'See subscriptions list', 'hintUrl': '/statistics#subscriptions'},
        {'stat': 'Views', 'value': 5, 'hint': 'See views list', 'hintUrl': '/statistics#views'},
        {'stat': 'Likes', 'value': 0, 'hint': 'See likes list', 'hintUrl': '/statistics#likes'},
        {'stat': 'Average views on post', 'value': 40, 'hint': 'See views list', 'hintUrl': '/statistics#views'},

        {'stat': 'Account creation date', 'value': '2023.04.02'},
    ]
}