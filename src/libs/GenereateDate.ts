export const generateDate = (date:string)=>{
    const originalDate = new Date(date);

    // Get the date part in YYYY-MM-DD format
    // const formattedDate = originalDate.toISOString().split('T')[0];
    const formattedDate = originalDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).replace(/\//g, '-');

    return formattedDate
}