/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'Hi! Welcome to Car Dealers.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'If you are here to purchase a car please click on yes or no',
        next: 3
    },
    3: {
        text: 'We are here to help you find your dream car.',
        options: [
            {
                text: "<strong>Yes</strong>, I am!",
                next: 4
            },
            {
                text: "<strong>No</strong>, just browsing.",
                next: 5
            }
        ]
    },
    4: {
        text:'Browse through Car Page!',
        options: [
            {
        text: 'Go to our car page!',
        url:"cars.html"


            }



        ]
        
    },
    5: {
        text: 'Aah, you\'re missing out on our great deals',
        next: 6
    },
    6: {
        text: 'Let us know if you have any doubts or needs.',
        options: [
            {
                text: "Go to Contact Page",
                url: "contact.html"
            }
        ]
    }
};