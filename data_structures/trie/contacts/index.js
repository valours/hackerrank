module.exports = (queries) => {
  const results = [];
  const contacts = [];

  queries.forEach((query) => {
    const { action, partial } = query;
    if (action === 'add') {
      contacts.push(partial);
    } else if (action === 'find') {
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
  return results;
};
