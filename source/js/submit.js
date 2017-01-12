/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

document.addEventListener('turbolinks:load', function () {

  // CHOICES //

  const choicesOptions = {
    maxItemCount: 3,
    duplicateItems: false,
    itemSelectText: 'Press Enter to select',
  };

  const countries = new Choices('#countries', choicesOptions);

  const languages = new Choices('#languages', choicesOptions);

  const colleges = new Choices('#college', {
    maxItemCount: 1,
  });
});
