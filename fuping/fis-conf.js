// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites',{
      margin: 10
    })
});
fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  // optimizer: fis.plugin('clean-css'),
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.{png,jpg,js,css}', {
	// useHash: true,
	release: '/static/$0'
});
