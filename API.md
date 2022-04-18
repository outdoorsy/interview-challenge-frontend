## Endpoint documentation
*URL:*
GET https://search.outdoorsy.com/rentals

*Query parameters:*
Required: `filter[keywords]` - a space-separated string of search terms
Optional: `page[limit]` - an integer that sets requested maximum result count
Optional: `page[offset]` - an integer that sets the index of the first result
(Example: a "third page" of 8 results would have limit of 8, offset of 16)

*Response:*
The `data` object is an array of rental results.
Find name of rental at `data[].attributes.name`
Find primary image URL of rental by getting the ID from `data[].relationships.primary_image.data.id` and finding the matching `id` with `type: images` from the `included` array. The image URL is at `included[].attributes.url`.

An exported Postman collection is attached that demonstrates this request and its parameters.