问卷调查
----------
该项目效果类似于[QQ问卷调查](https://wj.qq.com/guide.html)效果

功能
-------------------
- 问卷创建
- 问卷发布
- 问卷统计
- 题库
- 问卷统计结果导出

实体设计
-----------------
* 问卷实体[Survey]
  - 某个具体的问卷包含具体的问卷问题，问题直接嵌入到问卷实体中,需要加入分页机制，数据结果大致如下
  ```json
  {
  	"id": "2028893",
  	"title": "&lt;p&gt;问卷标题&lt;\/p&gt;",
  	"prefix": "&lt;p&gt;为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！&lt;\/p&gt;\n",
  	"suffix": "&lt;p&gt;&lt;img alt=&quot;问卷已经100%完成&quot; src=&quot;\/\/wj.qq.com\/image\/end.png&quot; \/&gt;&lt;\/p&gt;\n\n&lt;p&gt;&nbsp;&lt;\/p&gt;\n\n&lt;p&gt;问卷到此结束，感谢您的参与！&lt;\/p&gt;\n",
  	"callback": "",
  	"endTime": "0",
  	"hash": "e9b8",
  	"show_stat": false,
  	"ip": false,
  	"pc": false,
  	"prev": false,
  	"titleIndex": true,
  	"createTime": "1524104575",
  	"updateTime": "1524105188",
  	"startTime": "1524105155",
  	"lang": "zh",
  	"purpose": "备注信息",
  	"state": "2",
  	"pages": [{
  		"id": 1,
  		"questions": [{
  			"type": "radio",
  			"title": "&lt;p&gt;①单选题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"random": false,
  			"maxRow": "1",
  			"refer": null,
  			"options": [{
  				"id": "o-100-ABCD",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项1&lt;\/p&gt;\n"
  			}, {
  				"id": "o-101-EFGH",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项2&lt;\/p&gt;\n"
  			}],
  			"id": "q-1-Gx3v"
  		}, {
  			"type": "select",
  			"title": "&lt;p&gt;②下拉题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"random": false,
  			"maxRow": "1",
  			"refer": null,
  			"options": [{
  				"id": "o-100-ABCD",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "选项1"
  			}, {
  				"id": "o-101-EFGH",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "选项2"
  			}, {
  				"id": "o-2-tcUV",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "选项3"
  			}],
  			"id": "q-2-Lphv"
  		}, {
  			"type": "checkbox",
  			"title": "&lt;p&gt;③多选题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"options": [{
  				"id": "o-100-ABCD",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项1&lt;\/p&gt;\n",
  				"exclusive": false
  			}, {
  				"id": "o-101-EFGH",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项2&lt;\/p&gt;\n",
  				"exclusive": false
  			}, {
  				"id": "o-2-Mp1K",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项3&lt;\/p&gt;\n",
  				"exclusive": false
  			}, {
  				"id": "o-3-qUre",
  				"goto": "",
  				"display": [],
  				"noRandom": false,
  				"text": "&lt;p&gt;选项4&lt;\/p&gt;\n",
  				"exclusive": false
  			}],
  			"random": false,
  			"maxRow": "1",
  			"maxlength": 0,
  			"refer": "",
  			"id": "q-3-SokI"
  		}, {
  			"type": "text",
  			"title": "&lt;p&gt;④单行文本&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"validate": "",
  			"maxlength": "",
  			"id": "q-4-g3d4"
  		}, {
  			"type": "textarea",
  			"title": "&lt;p&gt;⑤多行文本&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"rows": "5",
  			"cols": "60",
  			"id": "q-5-N4ws"
  		}, {
  			"type": "star",
  			"title": "&lt;p&gt;⑥评分题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"starShow": "满意",
  			"otherStr": "不清楚",
  			"isOther": false,
  			"starBeginNum": 1,
  			"starNum": "10",
  			"starType": "default",
  			"revertSort": 0,
  			"starShowCustomStart": "",
  			"starShowCustomEnd": "",
  			"id": "q-6-yvfV"
  		}, {
  			"type": "matrix_radio",
  			"title": "&lt;p&gt;⑦矩阵单选&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"subTitles": [{
  				"id": "g-1-ABCD",
  				"text": "&lt;p&gt;问题1&lt;\/p&gt;\n"
  			}, {
  				"id": "g-2-EFGH",
  				"text": "&lt;p&gt;问题2&lt;\/p&gt;\n"
  			}],
  			"options": [{
  				"id": "o-100-ABCD",
  				"text": "&lt;p&gt;选项1&lt;\/p&gt;\n"
  			}, {
  				"id": "o-101-EFGH",
  				"text": "&lt;p&gt;选项2&lt;\/p&gt;\n"
  			}],
  			"refer": null,
  			"id": "q-7-EUPn"
  		}, {
  			"type": "matrix_checkbox",
  			"title": "&lt;p&gt;⑧矩阵多选题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"subTitles": [{
  				"id": "g-1-ABCD",
  				"text": "&lt;p&gt;问题1&lt;\/p&gt;\n"
  			}, {
  				"id": "g-2-EFGH",
  				"text": "&lt;p&gt;问题2&lt;\/p&gt;\n"
  			}],
  			"options": [{
  				"id": "o-100-ABCD",
  				"text": "&lt;p&gt;选项1&lt;\/p&gt;\n"
  			}, {
  				"id": "o-101-EFGH",
  				"text": "&lt;p&gt;选项2&lt;\/p&gt;\n"
  			}],
  			"refer": null,
  			"id": "q-8-Znbd"
  		}, {
  			"type": "matrix_star",
  			"title": "&lt;p&gt;⑨矩阵评分&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"subTitles": [{
  				"id": "g-1-ABCD",
  				"text": "&lt;p&gt;问题1&lt;\/p&gt;\n"
  			}, {
  				"id": "g-2-EFGH",
  				"text": "&lt;p&gt;问题2&lt;\/p&gt;\n"
  			}],
  			"refer": null,
  			"starShow": "满意",
  			"otherStr": "不清楚",
  			"isOther": false,
  			"starBeginNum": 1,
  			"starNum": "5",
  			"starType": "default",
  			"revertSort": 0,
  			"starShowCustomStart": "",
  			"starShowCustomEnd": "",
  			"id": "q-9-87Nv"
  		}, {
  			"type": "sort",
  			"title": "&lt;p&gt;⑩排序题&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"random": false,
  			"options": [{
  				"id": "o-100-ABCD",
  				"text": "&lt;p&gt;选项1&lt;\/p&gt;\n"
  			}, {
  				"id": "o-101-EFGH",
  				"text": "&lt;p&gt;选项2&lt;\/p&gt;\n"
  			}, {
  				"id": "o-102-ITRj",
  				"text": "&lt;p&gt;选项3&lt;\/p&gt;\n"
  			}],
  			"refer": null,
  			"id": "q-10-mcJE"
  		}, {
  			"type": "chained_selects",
  			"title": "&lt;p&gt;11--联动&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [],
  			"random": false,
  			"levels": ["省", "市", "区"],
  			"groups": [
  				["2-jA", "河南", [
  					["3-Sk", "郑州", [
  						["4-zt", "中原区"],
  						["5-eG", "惠济区"],
  						["6-Ur", "金水区"]
  					]],
  					["7-ju", "信阳", [
  						["8-Vj", "平桥区"],
  						["9-8k", "浉河区"]
  					]],
  					["10-pz", "南阳"]
  				]],
  				["11-ui", "湖北", [
  					["12-fH", "武汉"],
  					["13-qB", "汉口"],
  					["14-O1", "孝感"]
  				]]
  			],
  			"id": "q-11-4dX3"
  		}, {
  			"type": "upload",
  			"title": "&lt;p&gt;12--附件&lt;\/p&gt;\n",
  			"description": "",
  			"required": false,
  			"goto": "",
  			"blank_setting": [],
  			"file_type_limit": ["gif", "png", "jpg", "jpeg", "bmp", "doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "txt", "zip", "gzip", "rar"],
  			"file_size_limit": 5120,
  			"id": "q-12-XBZc"
  		}, {
  			"type": "description",
  			"title": "&lt;p&gt;段落说明&lt;\/p&gt;\n",
  			"description": "",
  			"goto": "",
  			"blank_setting": [],
  			"id": "q-13-2FQx"
  		}, {
  			"type": "text_multiple",
  			"title": "&lt;p&gt;13--题目: 填空题&lt;span class=&quot;mod_fillblank&quot; data-id=&quot;fillblank-1eML&quot;&gt;________&lt;\/span&gt;&lt;\/p&gt;\n",
  			"description": "",
  			"required": true,
  			"goto": "",
  			"blank_setting": [{
  				"id": "fillblank-1eML",
  				"validate": null,
  				"type": "question",
  				"attach_id": "q-14-3lsw"
  			}],
  			"id": "q-14-3lsw"
  		}],
  		"index": 0
  	}],
  	"url": "https:\/\/wj.qq.com\/s\/2028893\/e9b8",
  	"thumb_url": "https:\/\/cdn.ur.qq.com\/thumb\/93\/2028893_s.jpg?t=1524105188",
  	"style": {
  		"theme": "default",
  		"custom": {}
  	},
  	"previewURL": "",
  	"page_count": 1,
  	"topic_count": 14,
  	"reward": {
  		"status": 0
  	},
  	"default_reward": false,
  	"login_check": false,
  	"answer_count": 0,
  	"whitelist_enable": false,
  	"login": false,
  	"answer_notice": false,
  	"answer_notice_type": 0,
  	"survey_type": 0,
  	"create_owner": null,
  	"survey_rules": {
  		"version": "1.0",
  		"list": [],
  		"positions": []
  	},
  	"hide_tencent_relevant_allowed": false,
  	"hide_tencent_relevant": false,
  	"custom_copyright": "",
  	"redirect_url": null,
  	"webhook_url": null,
  	"remark_name": "",
  	"questions_random": [],
  	"recycle": 1,
  	"validCount": 1,
  	"credit_level": 0,
  	"code": 0,
  	"timestamp": 1524105188,
  	"cache": "miss"
  }
  ```
* 问题实体[Question]
  - 问题实体是问卷中某个具体的问题，具有类型，目前设计有9种，每个问题下有具体的选项
* 问卷结果
  - 如何设计问卷结果数据结构，即前端提交的问卷json数据如何构建，需要加入分页机制，大致数据结果如下
  ```json
  {
  	"id": "2026302",
  	"survey_type": 0,
  	"jsonLoadTime": 17,
  	"ldw": "6AB2D5E8-F075-41C5-B699-05812AA36D1B",
  	"time": 1524031303,
  	"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
  	"openid": "",
  	"pages": [{
  		"id": "1",
  		"questions": [{
  			"id": "q-1-Yw1p",
  			"type": "radio",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 1,
  				"text": "<p>选项</p>\n"
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-2-OoVj",
  			"type": "select",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 1,
  				"text": "选项"
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-3-O6mg",
  			"type": "checkbox",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 1,
  				"text": "<p>选项</p>\n"
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-4-SmP8",
  			"type": "text",
  			"text": "dfdfdfd",
  			"options": [],
  			"blanks": []
  		}, {
  			"id": "q-5-CDvF",
  			"type": "star",
  			"text": "2",
  			"options": [],
  			"starNum": "5",
  			"starBeginNum": 1,
  			"blanks": []
  		}]
  	}],
  	"referrer": "https://wj.qq.com/edit.html?sid=2026302"
  }
  ```
* 问卷答案实体[SurveyAnswer]
  - 在收集某一套具体的问卷答案包含具体的问题以及答案选项，选项嵌套在问题中，问题直接嵌入到问卷实体中，数据结果大致如下
  ```json
  {
  	"id": "2028893",
  	"survey_type": 0,
  	"jsonLoadTime": 132,
  	"ldw": "E93E1B6C-EC3E-4AEE-B787-A4F33A63CFA9",
  	"time": 1524106024,
  	"ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
  	"openid": "",
  	"pages": [{
  		"id": "1",
  		"questions": [{
  			"id": "q-1-Gx3v",
  			"type": "radio",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 1,
  				"text": "<p>选项1</p>\n"
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-2-Lphv",
  			"type": "select",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 0,
  				"text": ""
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 1,
  				"text": "选项2"
  			}, {
  				"id": "o-2-tcUV",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-3-SokI",
  			"type": "checkbox",
  			"text": "",
  			"options": [{
  				"id": "o-100-ABCD",
  				"checked": 1,
  				"text": "<p>选项1</p>\n"
  			}, {
  				"id": "o-101-EFGH",
  				"checked": 1,
  				"text": "<p>选项2</p>\n"
  			}, {
  				"id": "o-2-Mp1K",
  				"checked": 0,
  				"text": ""
  			}, {
  				"id": "o-3-qUre",
  				"checked": 0,
  				"text": ""
  			}],
  			"blanks": []
  		}, {
  			"id": "q-4-g3d4",
  			"type": "text",
  			"text": "是方式发送到",
  			"options": [],
  			"blanks": []
  		}, {
  			"id": "q-5-N4ws",
  			"type": "textarea",
  			"text": "安达市多",
  			"options": [],
  			"blanks": []
  		}, {
  			"id": "q-6-yvfV",
  			"type": "star",
  			"text": "10",
  			"options": [],
  			"starNum": "10",
  			"starBeginNum": 1,
  			"blanks": []
  		}, {
  			"id": "q-7-EUPn",
  			"type": "matrix_radio",
  			"text": "",
  			"groups": [{
  				"id": "g-1-ABCD",
  				"options": [{
  					"id": "o-100-ABCD",
  					"checked": 1,
  					"text": "<p>选项1</p>\n"
  				}, {
  					"id": "o-101-EFGH",
  					"checked": 0,
  					"text": ""
  				}]
  			}, {
  				"id": "g-2-EFGH",
  				"options": [{
  					"id": "o-100-ABCD",
  					"checked": 0,
  					"text": ""
  				}, {
  					"id": "o-101-EFGH",
  					"checked": 1,
  					"text": "<p>选项2</p>\n"
  				}]
  			}],
  			"blanks": []
  		}, {
  			"id": "q-8-Znbd",
  			"type": "matrix_checkbox",
  			"text": "",
  			"groups": [{
  				"id": "g-1-ABCD",
  				"options": [{
  					"id": "o-100-ABCD",
  					"checked": 0,
  					"text": ""
  				}, {
  					"id": "o-101-EFGH",
  					"checked": 1,
  					"text": "<p>选项2</p>\n"
  				}]
  			}, {
  				"id": "g-2-EFGH",
  				"options": [{
  					"id": "o-100-ABCD",
  					"checked": 0,
  					"text": ""
  				}, {
  					"id": "o-101-EFGH",
  					"checked": 1,
  					"text": "<p>选项2</p>\n"
  				}]
  			}],
  			"blanks": []
  		}, {
  			"id": "q-9-87Nv",
  			"type": "matrix_star",
  			"groups": [{
  				"id": "g-1-ABCD",
  				"text": "3"
  			}, {
  				"id": "g-2-EFGH",
  				"text": "2"
  			}],
  			"starNum": "5",
  			"starBeginNum": 1,
  			"blanks": []
  		}, {
  			"id": "q-10-mcJE",
  			"type": "sort",
  			"options": [{
  				"id": "o-101-EFGH",
  				"sort_no": 1
  			}, {
  				"id": "o-102-ITRj",
  				"sort_no": 2
  			}, {
  				"id": "o-100-ABCD",
  				"sort_no": 3
  			}],
  			"blanks": []
  		}, {
  			"id": "q-11-4dX3",
  			"id_list": ["2-jA", "3-Sk", "4-zt"],
  			"answer_texts": [],
  			"blanks": [],
  			"type": "chained_selects",
  			"text_list": ["河南", "郑州", "中原区"]
  		}, {
  			"id": "q-12-XBZc",
  			"type": "upload",
  			"blanks": []
  		}, {
  			"id": "q-13-2FQx",
  			"answer_texts": [],
  			"blanks": []
  		}, {
  			"id": "q-14-3lsw",
  			"type": "text_multiple",
  			"blanks": [{
  				"id": "fillblank-1eML",
  				"value": "冯绍峰"
  			}]
  		}]
  	}],
  	"referrer": "https://wj.qq.com/edit.html?sid=2028893"
  }
  
优化
----------------
- 问卷创建完毕后进行静态化，防止每次展示都从数据库中进行拉取
- 问卷统计如何进行最大优化

设计
----------------
- 问卷答案的保存，针对不同的题目类型如何保存题目结果，考虑使用策略模式，针对不同的问题
  类型使用对应策略进行结果保存
- 问卷创建过程
  新建问卷时，通过接口获取问卷id，后续所有操作基于该id进行，每创建一题进行一次异步保存
- 问题实体设计
  该系统存在多个问题类型（目前为14种），除一些基本属性外，每种问题都有其特殊性，如何定义
  问题实体，目前两种方案
  * 将所有问题实体的属性集中到一个单独的实体中，该方式会造成该实体变得庞大且难以维护，但
  由于选用mongod作为存储，并不会出现字段冗余且易于进行接口的设计
  * 每一种问题类型定义一种对应的问题实体，该方式易于扩展且各个类职责分明，但是会造成大量
  类存在并且接口如何进行设计才能通用的接收各个类型问题
- 问卷回答实体设计
  回答实体大致与问题相对应，每种问题有其对应的回答类型
- 用户收藏题目
  用户可以对题目进行收藏，收藏的题目和原题目之间无任何关系，即进行题目的全复制，将收藏题目
  单独出来，不嵌入用户实体中
- 问卷模板
  对于问卷模板，目前考虑直接将问题嵌入到模板中，或者说模板间的题目相互隔离
  在该设计方式下，如何做到以下功能
  * 只返回问卷模板的基本信息，包括名称、包含题目数等
  * 返回所有的模板简单信息
  解决方案目前使用mongodb的统计聚合功能以及部分查询功能实现，性能未知（还行）
  模板的添加由管理员进行
- 题库
  题库由管理员进行创建

分支说明
------------
* master  正式分支
* develop 本地开发分支
* 249     测试线分支 