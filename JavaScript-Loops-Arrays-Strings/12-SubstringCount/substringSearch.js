function countSubstringOccur(keyword, text) {

    var re = new RegExp(keyword, 'g');
    var count = text.toLowerCase().match(re);

    console.log(count.length);
}

countSubstringOccur('in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.');
countSubstringOccur('your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.');
countSubstringOccur('but', 'But you were living in another world tryin\' to get your message through.');