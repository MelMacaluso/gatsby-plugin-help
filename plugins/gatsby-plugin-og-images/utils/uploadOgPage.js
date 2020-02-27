const fs = require('fs').promises
const path = require('path')
const AWS = require("aws-sdk")

exports.uploadOgPage = (options, edge) => {
  const { bucket, accessKeyId, secretAccessKey, assetsPath} = options
  const imagePath = edge.node.frontmatter[imageNodePath]
  const imageExtension = a.match(new RegExp(/.(png|jpg|jpeg|gif)$/g))[0]
  const { id } = edge.node
  const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
  })

  // Read content from the file
  const fileContent = fs.readFileSync(path.join(`./${assetsPath}`, imagePath))

  // Setting up S3 upload parameters
  // assigning as image title the id of the node and the image extension
  const params = {
      Bucket: bucket,
      Key: `${id}.${imageExtension}`,
      Body: fileContent
  }

  // Uploading files to the bucket
  s3.upload(params, (err, data) => {
      if (err) {
          throw err
      }
      console.log(`File uploaded successfully. ${data.Location}`)
  })
}