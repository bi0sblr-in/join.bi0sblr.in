const logo = new Proxy({"src":"/_astro/logo.BvhzoF8G.svg","width":100,"height":100,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/join.bi0sblr.in/src/assets/logo.svg";
							}
							
							return target[name];
						}
					});

export { logo as l };
