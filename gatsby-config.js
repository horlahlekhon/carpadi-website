/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require('dotenv').config();

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        disableVendorPrefixes: false,
      },
    }, 
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: "grootretro",
        apiKey: "297813253687341",
        apiSecret: "A_IlqhvQ4DtmzkupP9rwCshavTo",
        resourceType: `image`,
        prefix: `carpadi-website/` ,
        maxResults: 100
      }
    }
  ],
  siteMetadata: {
    extraIncomeHeader: 'Earn Extra Income \n By Trading Cars',
    extraIncomeBody: "We give you access to a diverse selection of used cars that you can jointly buy and profit on the go.",
    tradeCarsHeader: 'Trade cars like stock',
    tradeCarsTitle: 'Think Bamboo for Cars',
    passiveIncome: 'New generation car trading…\n Join the wave!',
    reviewHeader: "Here's what our early adopters are saying:",
    secureHeader: 'Your money is safe \n and secure',
    desktopSecureHeader: 'Your money is safe and secure',
    secureBody: 'We are dedicated to safeguarding your funds with \n the most sophisticated security measures available.',
    email: 'yourpadi@carpadi.com',
    phone: '07033794644',
    address: '54, community road, \n Akoka Yaba, Lagos, Nigeria.',
    policy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat, nisl et fermentum rhoncus, massa tortor fermentum felis, vitae suscipit diam ligula quis nisl. Nam commodo dignissim velit, ut viverra odio auctor sed. Etiam at arcu magna. Donec pharetra orci ante, vel porta purus semper non. Quisque fringilla metus dictum ante aliquam semper. Ut tincidunt maximus sapien, et malesuada tortor pharetra nec. Aliquam elementum nunc nisi, scelerisque auctor diam dapibus et. Nunc odio justo, euismod at ante at, scelerisque porttitor lectus. Phasellus non mauris purus. Praesent auctor.',
    firstReviewUserName: 'Jane A. James',
    secondReviewUserName: 'Antony Hook J.',
    thirdReviewUserName: 'Alex M.J Ockland',
    fourthReviewUserName: 'Doon Bub',
    firstReviewComment: 'Nunc magna nibh, mollis at ultrices quis, gravida a magna. Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. Nullam id purus commodo, convallis leo id.',
    secondReviewComment: 'Nunc magna nibh, mollis at ultrices quis, gravida a magna. Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. Nullam id purus commodo, convallis leo id.',
    thirdReviewComment: 'Nunc magna nibh, mollis at ultrices quis, gravida a magna. Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. Nullam id purus commodo, convallis leo id.',
    fourthReviewComment: 'Nunc magna nibh, mollis at ultrices quis, gravida a magna. Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices. Nullam id purus commodo, convallis leo id.',
    carListingTitle: 'View car listing',
    carListingContent: 'Users can browse through multiple cars listed for sale on our app that have been inspected and vetted by top mechanics.',
    shareTitle: 'Buy a share',
    shareContent: 'After finding the right deal, users can instantly fund their wallet and join other users in buying portions of the car.',
    earnTitle: 'Earn',
    earnContent: "Carpadi handles the marketing and once a car is sold, user capital and profit is credited into the user's wallet.",
    unlimitedText: 'Unlimited access to used cars',
    capitalText: 'Little capital required',
    sweatText: 'Get paid without breaking a sweat',

  }
}
