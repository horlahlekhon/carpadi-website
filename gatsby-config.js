/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require('dotenv').config();

module.exports = {
  /* Your site config here */
  plugins: [
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
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `carpadi-website/` ,
        maxResults: 100
      }
    }
  ],
  siteMetadata: {
    extraIncomeHeader: 'Earn Extra Income \n By Trading Cars',
    extraIncomeBody: "We give you access to a diverse selection of used \n cars that you can buy with others and resell for a \n profit on the go",
    tradeCarsHeader: 'Trade cars like stock',
    tradeCarsTitle: 'Think Bamboo for Cars',
    passiveIncome: 'A passive income \n that pays up to 75% \n interest per annum',
    reviewHeader: "Here's what our early adopters are saying:",
    secureHeader: 'Your money is safe \n and secure',
    desktopSecureHeader: 'Your money is safe and secure',
    secureBody: 'We are dedicated to safeguarding your funds with \n the most sophisticated security measures available.',
    email: 'support@capadi.com',
    phone: '0990302828901',
    address: 'Morbi eu facilisis eros. \n Nulla gravida ipsum nec \n ex laoreet ultrices.',
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
    carListingContent: 'We offer a variety of fast-selling used cars that are less than four years old and have been thoroughly inspected.Take your pick.',
    shareTitle: 'Buy a share',
    shareContent: 'Choose a car and instantly join others in owning a portion of it.',
    earnTitle: 'Earn',
    earnContent: 'When your chosen car is sold, you will be paid both capital and interest. No Story!',
    unlimitedText: 'Unlimited access to used cars',
    capitalText: 'Little capital required',
    sweatText: 'Get paid without breaking a sweat',

  }
}
