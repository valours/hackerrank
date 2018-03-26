module.exports = (queries) => {
  console.log(queries);
  const results = [];
  const contacts = [];

  queries.forEach((query) => {
    console.log(query);
    const { action, partial } = query;
    if (action === 'add') {
      contacts.push(partial);
    } else if (action === 'find') {
      console.log('damn');
      let itemFinded = 0;
      contacts.forEach((contact) => {
        const match = contact.match(`/${partial}/g`);
        if (match) {
          itemFinded += 1;
        }
      });
      results.push(itemFinded);
    }
  });
  console.log('results', results);
  return results;
};
