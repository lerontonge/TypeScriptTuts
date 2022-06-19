type VisitsData = {
  visits: Array<{
    page: {
      name: string;
    };
  }>;
  user: {
    name: string;
  };
};
function logVisits(data: VisitsData) {
  data.visits.forEach(visit => console.log(visit.page.name, data.user.name));
}
