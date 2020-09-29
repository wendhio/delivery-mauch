import app from './app';

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`API running port ${process.env.PORT}`);
});
