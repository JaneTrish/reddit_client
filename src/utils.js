//function to format long number, e.g. 1,000 to 1k, 1,000,000 to 1M
export function intToString(num) {
  num = num.toString().replace(/[^0-9.]/g, '');
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: 'k' },
    { v: 1e6, s: 'M' },
    { v: 1e9, s: 'B' },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
    si[index].s
  );
}

//finction to find out how many minutes/hours/days etc. ago the post was created

export function timeSince(date) {
  if (typeof date !== 'object') {
    date = new Date(date * 1000);
  }

  const seconds = Math.floor((new Date() - date) / 1000);
  let intervalType;

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = 'hour';
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = 'minute';
          } else {
            interval = seconds;
            intervalType = 'second';
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }

  return interval + ' ' + intervalType;
}
