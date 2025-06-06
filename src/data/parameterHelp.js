/**
 * 参数帮助信息数据
 * 包含所有参数的简短描述和详细教程
 */

export const parameterTooltips = {
  // 窗口期参数
  windows: {
    id: "windows",
    title: "窗口期",
    description:
      "设置分析股票的时间范围，以天为单位。可以同时设置多个窗口期进行分析。",
  },
  expected_count: {
    id: "expected_count",
    title: "期望股票数量",
    description:
      "设置最终筛选出的平台期股票数量。系统会优先选择符合条件且行业分布均衡的股票。",
  },

  // 价格参数
  box_threshold: {
    id: "box_threshold",
    title: "振幅阈值",
    description:
      "设置股票价格波动的最大范围。较小的值意味着更严格的横盘整理要求。",
  },
  ma_diff_threshold: {
    id: "ma_diff_threshold",
    title: "均线粘合度",
    description:
      "设置均线之间的最大偏离程度。较小的值表示均线更加集中，表明价格趋势更加稳定。",
  },
  volatility_threshold: {
    id: "volatility_threshold",
    title: "波动率阈值",
    description: "设置股票日间波动的最大值。较小的值表示价格波动更加平稳。",
  },

  // 成交量参数
  use_volume_analysis: {
    id: "use_volume_analysis",
    title: "启用成交量分析",
    description: "开启后将分析成交量变化模式，识别成交量萎缩和突破情况。",
  },
  volume_change_threshold: {
    id: "volume_change_threshold",
    title: "成交量变化阈值",
    description:
      "设置平台期内成交量变化的最大比例。较小的值表示成交量萎缩更加明显。",
  },
  volume_stability_threshold: {
    id: "volume_stability_threshold",
    title: "成交量稳定性阈值",
    description:
      "设置平台期内成交量波动的最大程度。较小的值表示成交量更加稳定。",
  },
  volume_increase_threshold: {
    id: "volume_increase_threshold",
    title: "成交量突破阈值",
    description:
      "设置识别为突破的最小成交量放大倍数。较大的值表示突破信号更加明确。",
  },

  // 技术指标参数
  use_breakthrough_prediction: {
    id: "use_breakthrough_prediction",
    title: "启用突破前兆识别",
    description: "开启后将分析技术指标，识别可能的突破信号。",
  },

  // 位置参数
  use_low_position: {
    id: "use_low_position",
    title: "启用低位判断",
    description: "开启后将分析股票是否处于低位，即从历史高点下跌一定幅度。",
  },
  high_point_lookback_days: {
    id: "high_point_lookback_days",
    title: "高点查找时间范围",
    description:
      "设置查找历史高点的时间范围，以天为单位。较大的值可以找到更长时间内的高点。",
  },
  decline_period_days: {
    id: "decline_period_days",
    title: "下跌时间范围",
    description:
      "设置判断下跌发生的时间范围，以天为单位。较大的值允许更长时间的下跌过程。",
  },
  decline_threshold: {
    id: "decline_threshold",
    title: "下跌幅度阈值",
    description: "设置判断为低位的最小下跌幅度。较大的值要求更严格的下跌幅度。",
  },

  // 快速下跌判断参数
  use_rapid_decline_detection: {
    id: "use_rapid_decline_detection",
    title: "启用快速下跌判断",
    description:
      "开启后将检测股票是否经历了快速下跌后形成平台期，类似安记食品的走势模式。",
  },
  rapid_decline_days: {
    id: "rapid_decline_days",
    title: "快速下跌时间窗口",
    description:
      "设置判断快速下跌的时间窗口，以天为单位。较小的值关注更短期的快速下跌。",
  },
  rapid_decline_threshold: {
    id: "rapid_decline_threshold",
    title: "快速下跌幅度阈值",
    description:
      "设置判断为快速下跌的最小下跌幅度。较大的值要求更显著的快速下跌。",
  },

  // 突破确认参数
  use_breakthrough_confirmation: {
    id: "use_breakthrough_confirmation",
    title: "启用突破确认",
    description: "开启后将分析突破后的确认情况，避免假突破。",
  },
  breakthrough_confirmation_days: {
    id: "breakthrough_confirmation_days",
    title: "确认天数",
    description: "设置突破后需要多少天的确认。通常设为1表示第二天确认。",
  },

  // 窗口权重参数
  use_window_weights: {
    id: "use_window_weights",
    title: "启用窗口权重",
    description: "开启后可以为不同的窗口期分配权重，影响最终的评分和排序。",
  },

  // 箱体检测参数
  use_box_detection: {
    id: "use_box_detection",
    title: "启用箱体检测",
    description:
      "开启后将使用更精确的箱体形态检测算法，识别支撑位和阻力位，提高平台期识别的准确性。",
  },
  box_quality_threshold: {
    id: "box_quality_threshold",
    title: "箱体质量阈值",
    description:
      "设置箱体形态的最低质量要求，较高的值表示更严格的箱体形态要求。",
  },

  // 基本面筛选参数
  use_fundamental_filter: {
    id: "use_fundamental_filter",
    title: "启用基本面筛选",
    description: "开启后将分析股票的财务指标，筛选出基本面优秀的公司。",
  },
  revenue_growth_percentile: {
    id: "revenue_growth_percentile",
    title: "营收增长率百分位",
    description:
      "设置营收增长率在行业内的最低百分位要求。较小的值表示要求更高的营收增长率。",
  },
  profit_growth_percentile: {
    id: "profit_growth_percentile",
    title: "净利润增长率百分位",
    description:
      "设置净利润增长率在行业内的最低百分位要求。较小的值表示要求更高的净利润增长率。",
  },
  roe_percentile: {
    id: "roe_percentile",
    title: "ROE百分位",
    description: "设置ROE在行业内的最低百分位要求。较小的值表示要求更高的ROE。",
  },
  liability_percentile: {
    id: "liability_percentile",
    title: "资产负债率百分位",
    description:
      "设置资产负债率在行业内的最高百分位要求。较小的值表示要求更低的资产负债率。",
  },
  pe_percentile: {
    id: "pe_percentile",
    title: "PE百分位",
    description:
      "设置PE在行业内的最低百分位要求。较大的值表示允许更低的PE估值。",
  },
  pb_percentile: {
    id: "pb_percentile",
    title: "PB百分位",
    description:
      "设置PB在行业内的最低百分位要求。较大的值表示允许更低的PB估值。",
  },
  fundamental_years_to_check: {
    id: "fundamental_years_to_check",
    title: "检查年数",
    description: "设置检查连续增长的年数。较大的值表示要求更长期的稳定增长。",
  },
};

export const parameterTutorials = {
  // 窗口期参数
  windows: {
    title: "窗口期设置详解",
    sections: [
      {
        title: "什么是窗口期？",
        content:
          "窗口期是指分析股票历史数据的时间范围，以天为单位。系统会在这个时间范围内分析股票的价格走势、成交量变化等，判断是否处于平台期。不同的窗口期可以帮助识别不同时间尺度的平台整理形态。",
      },
      {
        title: "如何选择合适的窗口期？",
        content:
          "窗口期的选择应根据您的投资策略和关注的时间周期来确定。短期窗口适合短线交易，中长期窗口适合中长线投资。您可以同时设置多个窗口期，系统会分别进行分析并综合评估。",
        examples: [
          {
            scenario: "短线交易策略",
            value: "10, 20, 30",
            explanation: "适合关注短期价格变动，寻找短期突破机会",
          },
          {
            scenario: "中线投资策略",
            value: "30, 60, 90",
            explanation: "适合中期投资，关注中期趋势变化",
          },
          {
            scenario: "长线投资策略",
            value: "60, 120, 180",
            explanation: "适合长期投资，关注长期趋势变化",
          },
          {
            scenario: "混合策略",
            value: "30, 60, 120",
            explanation: "同时关注中短期和中长期的变化",
          },
        ],
      },
    ],
    tips: [
      "窗口期设置过短可能导致误判，建议最小不低于10天",
      "窗口期设置过长会减少符合条件的股票数量",
      "建议同时设置2-3个不同的窗口期，以获得更全面的分析",
      "如果启用了窗口权重，可以为不同窗口期分配不同的重要性",
    ],
  },

  expected_count: {
    title: "期望股票数量详解",
    sections: [
      {
        title: "参数作用",
        content:
          "期望股票数量决定了最终筛选出的平台期股票数量。系统会从所有符合条件的平台期股票中，按照行业多样性原则，选择指定数量的股票进行展示。",
      },
      {
        title: "如何设置合适的数量？",
        content:
          "设置期望股票数量时，应考虑您的投资组合规模和分散投资的需求。数量过少可能限制选择范围，数量过多可能包含不够理想的股票。",
        examples: [
          {
            scenario: "精选投资组合",
            value: "5-10",
            explanation: "适合资金有限，希望集中投资于少数高质量标的",
          },
          {
            scenario: "均衡投资组合",
            value: "10-20",
            explanation: "适合中等规模资金，希望在行业间适度分散",
          },
          {
            scenario: "广泛筛选",
            value: "20-30",
            explanation: "适合大规模资金，希望有更多选择空间",
          },
        ],
      },
    ],
    tips: [
      "系统会优先考虑行业多样性，确保选出的股票来自不同行业",
      "如果符合条件的股票数量少于期望数量，系统会返回所有符合条件的股票",
      "建议根据市场环境调整期望数量，熊市时可适当减少，牛市时可适当增加",
    ],
  },

  // 价格参数
  box_threshold: {
    title: "振幅阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "振幅阈值用于判断股票价格在窗口期内的波动范围是否足够小，是识别平台期的核心参数之一。它表示价格的最高点和最低点之间的差异相对于平均价格的比例。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "振幅阈值的设置需要平衡严格度和筛选结果数量。阈值越小，对价格波动的限制越严格，符合条件的股票越少；阈值越大，限制越宽松，符合条件的股票越多。",
        examples: [
          {
            scenario: "严格平台期",
            value: "0.1-0.3",
            explanation: "要求价格波动非常小，适合寻找高质量的平台整理",
          },
          {
            scenario: "一般平台期",
            value: "0.3-0.5",
            explanation: "允许适度的价格波动，平衡严格度和数量",
          },
          {
            scenario: "宽松平台期",
            value: "0.5-0.7",
            explanation: "允许较大的价格波动，适合在波动较大的市场环境中使用",
          },
        ],
      },
    ],
    tips: [
      "不同市场环境下应调整阈值，震荡市场可适当放宽",
      "小市值股票波动通常较大，可适当提高阈值",
      "与均线粘合度和波动率阈值配合使用，可以更精确地识别平台期",
    ],
  },

  ma_diff_threshold: {
    title: "均线粘合度详解",
    sections: [
      {
        title: "参数作用",
        content:
          "均线粘合度用于判断不同周期的移动平均线是否足够接近，是识别平台期的重要参数。它表示各条均线之间的离散程度相对于均线平均值的比例。均线粘合通常表示价格趋势处于平稳状态。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "均线粘合度阈值的设置需要考虑市场环境和个股特性。阈值越小，要求均线越接近，筛选越严格；阈值越大，允许均线间距越大，筛选越宽松。",
        examples: [
          {
            scenario: "高度粘合",
            value: "0.01-0.02",
            explanation: "要求均线高度粘合，适合寻找趋势即将变化的转折点",
          },
          {
            scenario: "中度粘合",
            value: "0.02-0.04",
            explanation: "允许均线有一定分离，平衡严格度和数量",
          },
          {
            scenario: "低度粘合",
            value: "0.04-0.06",
            explanation: "允许均线有较大分离，适合在趋势明显的市场中使用",
          },
        ],
      },
    ],
    tips: [
      "均线粘合通常是趋势转变的前兆，可能预示着突破或下跌",
      "与振幅阈值配合使用，可以更准确地识别高质量平台期",
      "不同行业的股票均线特性不同，可根据行业特点调整阈值",
    ],
  },

  volatility_threshold: {
    title: "波动率阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "波动率阈值用于判断股票价格的日间波动是否足够小，是识别平台期的辅助参数。它表示日收益率的标准差，反映价格波动的剧烈程度。低波动率通常表示市场情绪稳定，适合形成平台整理。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "波动率阈值的设置需要考虑市场整体波动性和个股特性。阈值越小，要求价格日间波动越小，筛选越严格；阈值越大，允许更大的日间波动，筛选越宽松。",
        examples: [
          {
            scenario: "低波动环境",
            value: "0.01-0.02",
            explanation: "要求极低的日间波动，适合在稳定市场中寻找高质量平台期",
          },
          {
            scenario: "中等波动环境",
            value: "0.02-0.04",
            explanation: "允许适度的日间波动，平衡严格度和数量",
          },
          {
            scenario: "高波动环境",
            value: "0.04-0.06",
            explanation: "允许较大的日间波动，适合在波动较大的市场环境中使用",
          },
        ],
      },
    ],
    tips: [
      "波动率与市场整体环境高度相关，应根据当前市场状况调整",
      "小市值股票通常波动率较高，可适当提高阈值",
      "波动率过低可能表示交投不活跃，需结合成交量综合判断",
    ],
  },

  // 成交量参数
  use_volume_analysis: {
    title: "成交量分析功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "成交量分析功能用于分析股票在平台期内的成交量变化模式，识别成交量萎缩和突破情况。成交量萎缩是高质量平台期的重要特征，而成交量突破则是潜在突破信号的重要指标。",
      },
      {
        title: "何时启用此功能？",
        content:
          "建议在大多数情况下启用此功能，特别是当您关注成交量变化与价格变化的配合关系时。成交量分析可以帮助筛选出更高质量的平台期，并提供额外的突破确认信号。",
        examples: [
          {
            scenario: "寻找高质量平台期",
            value: "启用",
            explanation: "结合价格和成交量分析，筛选出成交量逐渐萎缩的平台期",
          },
          {
            scenario: "关注突破信号",
            value: "启用",
            explanation: "识别成交量放大的突破信号，提高突破有效性",
          },
          {
            scenario: "仅关注价格形态",
            value: "禁用",
            explanation: "如果您的策略不依赖成交量分析，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "成交量分析与价格分析结合使用，可以提高平台期识别的准确性",
      "成交量萎缩通常是平台期的重要特征，而成交量放大则是突破信号的重要确认",
      "不同市场环境下，成交量特征可能有所不同，需要灵活调整相关阈值",
    ],
  },

  volume_change_threshold: {
    title: "成交量变化阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "成交量变化阈值用于判断平台期内成交量相对于历史成交量的变化程度。它表示平台期内平均成交量与之前时期平均成交量的比值。较小的值表示成交量萎缩更加明显，是高质量平台期的特征。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "成交量变化阈值的设置需要考虑市场环境和个股特性。阈值越小，要求成交量萎缩越明显，筛选越严格；阈值越大，允许成交量变化较小，筛选越宽松。",
        examples: [
          {
            scenario: "明显萎缩",
            value: "0.5-0.7",
            explanation: "要求成交量明显萎缩，适合寻找高质量平台期",
          },
          {
            scenario: "适度萎缩",
            value: "0.7-0.9",
            explanation: "要求成交量有一定萎缩，平衡严格度和数量",
          },
          {
            scenario: "轻微萎缩",
            value: "0.9-1.1",
            explanation: "允许成交量基本持平，适合在成交活跃的市场中使用",
          },
        ],
      },
    ],
    tips: [
      "成交量萎缩是高质量平台期的重要特征，通常预示着未来可能出现突破",
      "不同行业和不同市值的股票成交量特性不同，可根据具体情况调整阈值",
      "市场整体成交量变化也会影响个股成交量，应考虑市场环境因素",
    ],
  },

  volume_stability_threshold: {
    title: "成交量稳定性阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "成交量稳定性阈值用于判断平台期内成交量的波动程度。它表示成交量的变异系数（标准差除以均值），反映成交量的稳定性。较小的值表示成交量更加稳定，是高质量平台期的特征。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "成交量稳定性阈值的设置需要考虑市场环境和个股特性。阈值越小，要求成交量越稳定，筛选越严格；阈值越大，允许成交量波动较大，筛选越宽松。",
        examples: [
          {
            scenario: "高度稳定",
            value: "0.3-0.4",
            explanation: "要求成交量高度稳定，适合寻找高质量平台期",
          },
          {
            scenario: "中度稳定",
            value: "0.4-0.6",
            explanation: "允许成交量有一定波动，平衡严格度和数量",
          },
          {
            scenario: "低度稳定",
            value: "0.6-0.8",
            explanation: "允许成交量波动较大，适合在波动较大的市场环境中使用",
          },
        ],
      },
    ],
    tips: [
      "成交量稳定通常表示市场参与者情绪稳定，有利于形成高质量平台期",
      "与成交量变化阈值配合使用，可以更准确地识别高质量平台期",
      "不同时期市场的成交量特性不同，应根据当前市场状况调整阈值",
    ],
  },

  volume_increase_threshold: {
    title: "成交量突破阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "成交量突破阈值用于判断是否出现成交量放大的突破信号。它表示近期成交量相对于平台期成交量的放大倍数。较大的值表示成交量突破更加明确，是潜在价格突破的重要确认信号。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "成交量突破阈值的设置需要平衡信号的敏感度和可靠性。阈值越小，越容易捕捉到突破信号，但可能包含更多假信号；阈值越大，信号可靠性越高，但可能错过一些早期突破。",
        examples: [
          {
            scenario: "敏感信号",
            value: "1.2-1.5",
            explanation: "对成交量变化较为敏感，适合捕捉早期突破信号",
          },
          {
            scenario: "平衡信号",
            value: "1.5-2.0",
            explanation: "平衡信号敏感度和可靠性，适合大多数情况",
          },
          {
            scenario: "可靠信号",
            value: "2.0-2.5",
            explanation: "要求明显的成交量放大，提高信号可靠性",
          },
        ],
      },
    ],
    tips: [
      "成交量突破通常是价格突破的重要确认信号，两者配合使用效果更佳",
      "不同市场环境下，成交量突破特征可能有所不同，需要灵活调整阈值",
      "连续的成交量放大通常比单日放大更可靠，可结合多日成交量变化判断",
    ],
  },

  // 技术指标参数
  use_breakthrough_prediction: {
    title: "突破前兆识别功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "突破前兆识别功能通过分析多种技术指标（如MACD、KDJ、RSI、布林带等），识别可能的突破信号。这些信号可以帮助预测平台期后的可能突破方向和时机。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您希望在识别平台期的基础上，进一步预测可能的突破方向和时机时，可以启用此功能。这对于寻找潜在的交易机会特别有帮助。",
        examples: [
          {
            scenario: "寻找突破机会",
            value: "启用",
            explanation: "结合平台期识别和技术指标分析，寻找潜在的突破交易机会",
          },
          {
            scenario: "仅关注平台期",
            value: "禁用",
            explanation:
              "如果您只关注平台期的识别，不需要预测突破，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "突破前兆识别基于多种技术指标，需要至少两个指标同时发出信号才会被认为是有效信号",
      "技术指标信号并不保证实际突破，应结合价格走势和成交量变化综合判断",
      "不同市场环境下，技术指标的有效性可能有所不同，需要灵活运用",
    ],
  },

  // 箱体检测参数
  use_box_detection: {
    title: "箱体检测功能详解",
    sections: [
      {
        title: "什么是箱体检测？",
        content:
          "箱体检测是一种更精确的平台期识别方法，它通过分析价格的支撑位和阻力位，识别股票是否形成了明确的箱体形态。箱体形态是指价格在一定范围内上下波动，但始终被支撑位和阻力位所限制，形成一个价格区间。",
      },
      {
        title: "箱体检测的优势",
        content:
          "相比传统的平台期识别方法，箱体检测能够更准确地识别价格的支撑位和阻力位，判断箱体形态的质量，减少误判。它特别适合识别从高位下跌后形成的横盘整理形态，这类形态通常是潜在突破的良好前兆。",
      },
      {
        title: "何时启用此功能？",
        content:
          "建议在大多数情况下启用此功能，特别是当您希望更精确地识别高质量平台期时。箱体检测可以与传统的平台期识别方法结合使用，提高识别的准确性。",
        examples: [
          {
            scenario: "寻找高质量平台期",
            value: "启用",
            explanation:
              "使用箱体检测算法，识别具有明确支撑位和阻力位的高质量平台期",
          },
          {
            scenario: "识别底部整理形态",
            value: "启用",
            explanation: "结合低位判断功能，识别从高位下跌后形成的底部整理形态",
          },
          {
            scenario: "仅使用传统方法",
            value: "禁用",
            explanation: "如果您更习惯传统的平台期识别方法，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "箱体检测算法会分析价格的局部极值，识别支撑位和阻力位",
      "高质量的箱体形态通常具有多次触及支撑位和阻力位的特征",
      "箱体形态的质量由多个因素决定，包括支撑位和阻力位的强度、价格的包含度、趋势的平稳度等",
      "箱体检测与传统的平台期识别方法结合使用，可以提高识别的准确性",
    ],
  },

  box_quality_threshold: {
    title: "箱体质量阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "箱体质量阈值用于判断识别出的箱体形态是否具有足够高的质量。它是一个综合评分，考虑了支撑位和阻力位的强度、价格的包含度、趋势的平稳度等多个因素。较高的值表示更严格的箱体形态要求。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "箱体质量阈值的设置需要平衡严格度和筛选结果数量。阈值越高，对箱体形态的要求越严格，符合条件的股票越少；阈值越低，要求越宽松，符合条件的股票越多。",
        examples: [
          {
            scenario: "高质量箱体",
            value: "0.7-0.8",
            explanation: "要求箱体形态非常明确，适合寻找高质量的平台整理",
          },
          {
            scenario: "中等质量箱体",
            value: "0.5-0.7",
            explanation: "允许箱体形态有一定瑕疵，平衡严格度和数量",
          },
          {
            scenario: "宽松质量箱体",
            value: "0.4-0.5",
            explanation: "对箱体形态要求较低，适合在不稳定的市场环境中使用",
          },
        ],
      },
    ],
    tips: [
      "箱体质量评分是一个0到1之间的值，越接近1表示箱体形态越明确",
      "安记食品的案例分析显示，其箱体质量评分在0.94左右，是非常高质量的箱体形态",
      "不同市场环境下可能需要调整阈值，震荡市场可适当提高阈值，趋势市场可适当降低阈值",
      "箱体质量与突破后的表现通常有较强的相关性，高质量箱体突破后的走势往往更加可靠",
    ],
  },

  // 窗口权重参数
  use_window_weights: {
    title: "窗口权重功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "窗口权重功能允许为不同的窗口期分配不同的权重，影响最终的评分和排序。这使您可以根据自己的投资策略，强调特定时间周期的重要性。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您同时分析多个窗口期，并且认为某些窗口期比其他窗口期更重要时，可以启用此功能。这对于根据特定投资策略调整分析结果特别有用。",
        examples: [
          {
            scenario: "短线交易策略",
            value: "启用，短期窗口权重更高",
            explanation: "强调短期窗口的重要性，适合短线交易",
          },
          {
            scenario: "长线投资策略",
            value: "启用，长期窗口权重更高",
            explanation: "强调长期窗口的重要性，适合长线投资",
          },
          {
            scenario: "均衡策略",
            value: "禁用或均等权重",
            explanation: "平等对待各个窗口期，不特别强调某一时间周期",
          },
        ],
      },
    ],
    tips: [
      "窗口权重会影响最终的评分和排序，但不会改变各窗口期的分析结果",
      "权重设置应与您的投资策略保持一致，短线策略可强调短期窗口，长线策略可强调长期窗口",
      "初次使用时可以尝试均等权重，然后根据实际效果调整",
    ],
  },

  // 位置参数
  use_low_position: {
    title: "低位判断功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "低位判断功能用于分析股票是否处于相对低位，即从历史高点下跌一定幅度。底部横盘通常发生在股价处于低位时，这是形成高质量平台期的重要特征。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您希望筛选出处于低位的平台期股票时，应启用此功能。低位平台期通常具有更好的上涨潜力，是更优质的投资标的。",
        examples: [
          {
            scenario: "寻找底部平台期",
            value: "启用",
            explanation: "筛选出处于低位的平台期股票，寻找潜在的底部反转机会",
          },
          {
            scenario: "不考虑位置因素",
            value: "禁用",
            explanation:
              "如果您不关注股票位置，只关注平台期形态，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "低位平台期通常具有更好的风险收益比，上涨潜力更大",
      "结合成交量分析，可以更准确地识别高质量的底部平台期",
      "不同行业和不同市值的股票低位特征可能不同，需要灵活判断",
    ],
  },

  high_point_lookback_days: {
    title: "高点查找时间范围详解",
    sections: [
      {
        title: "参数作用",
        content:
          "高点查找时间范围用于设置查找历史高点的时间窗口，以天为单位。系统会在这个时间范围内寻找股票的历史最高价，用于计算当前价格相对于高点的下跌幅度。",
      },
      {
        title: "如何设置合适的范围？",
        content:
          "设置时需要考虑市场周期和个股特性。范围太小可能无法捕捉到真正的高点，范围太大则可能找到太过久远的高点。",
        examples: [
          {
            scenario: "短期分析",
            value: "180-240",
            explanation: "适合分析半年到八个月内的下跌，关注较短期的调整",
          },
          {
            scenario: "中期分析",
            value: "365",
            explanation: "适合分析一年内的下跌，平衡短期和长期",
          },
          {
            scenario: "长期分析",
            value: "500-730",
            explanation: "适合分析一年半到两年内的下跌，关注长期趋势变化",
          },
        ],
      },
    ],
    tips: [
      "市场周期通常为3-5年，设置时可以考虑当前所处的周期阶段",
      "不同行业的股票周期特性不同，可根据行业特点调整范围",
      "与下跌时间范围配合使用，可以更准确地识别低位股票",
    ],
  },

  decline_period_days: {
    title: "下跌时间范围详解",
    sections: [
      {
        title: "参数作用",
        content:
          "下跌时间范围用于设置判断下跌发生的时间窗口，以天为单位。系统会检查股票是否在这个时间范围内从高点下跌到当前价格。这有助于识别近期下跌而非长期下跌的股票。",
      },
      {
        title: "如何设置合适的范围？",
        content:
          "设置时需要考虑下跌速度和市场环境。范围太小可能无法捕捉到缓慢下跌的股票，范围太大则可能包含太多长期下跌的股票。",
        examples: [
          {
            scenario: "快速下跌",
            value: "60-90",
            explanation: "适合识别短期内快速下跌的股票，通常在市场调整期出现",
          },
          {
            scenario: "中速下跌",
            value: "120-180",
            explanation: "适合识别中期下跌的股票，平衡快速下跌和缓慢下跌",
          },
          {
            scenario: "缓慢下跌",
            value: "240-365",
            explanation: "适合识别长期缓慢下跌的股票，通常在熊市中出现",
          },
        ],
      },
    ],
    tips: [
      "下跌时间与下跌幅度通常成正比，大幅下跌通常需要更长时间",
      "市场环境会影响下跌速度，熊市中下跌通常更快",
      "与高点查找时间范围配合使用，可以更准确地识别低位股票",
    ],
  },

  decline_threshold: {
    title: "下跌幅度阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "下跌幅度阈值用于设置判断股票为低位的最小下跌百分比。例如，设置为0.5表示股票从高点下跌至少50%才被视为处于低位。这是识别低位股票的核心参数。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越大，要求下跌幅度越大，筛选越严格；阈值越小，允许下跌幅度较小，筛选越宽松。",
        examples: [
          {
            scenario: "严格低位",
            value: "0.6-0.7",
            explanation: "要求大幅下跌，适合寻找深度调整后的股票",
          },
          {
            scenario: "中度低位",
            value: "0.4-0.5",
            explanation: "要求适度下跌，平衡严格度和数量",
          },
          {
            scenario: "宽松低位",
            value: "0.3-0.4",
            explanation: "允许较小幅度下跌，适合在牛市中使用",
          },
        ],
      },
    ],
    tips: [
      "不同行业和不同市值的股票下跌特性不同，可根据具体情况调整阈值",
      "市场环境会影响下跌幅度，熊市中下跌通常更深",
      "结合技术指标和成交量分析，可以更准确地判断低位反转机会",
    ],
  },

  // 快速下跌判断参数
  use_rapid_decline_detection: {
    title: "快速下跌判断功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "快速下跌判断功能用于识别那些经历了快速、显著下跌后形成平台期的股票，类似安记食品的走势模式。这类股票通常在经历快速下跌后，市场恐慌情绪得到释放，形成底部平台期，具有较好的反弹或上涨潜力。",
      },
      {
        title: "与低位判断的区别",
        content:
          "低位判断关注的是股票从高点的总体下跌幅度，而快速下跌判断则更关注下跌的速度和集中度。一只股票可能经历了缓慢的长期下跌达到低位，但没有经历快速下跌；也可能经历了快速下跌，但总体下跌幅度不大。两者结合使用，可以更精确地识别具有投资价值的底部平台期股票。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您希望寻找类似安记食品这样经历快速下跌后形成平台期的股票时，应启用此功能。这类股票通常在经历快速下跌后，市场恐慌情绪得到充分释放，形成稳定的底部平台期，具有较好的反弹或上涨潜力。",
        examples: [
          {
            scenario: "寻找恐慌性下跌后的机会",
            value: "启用",
            explanation:
              "识别经历快速、恐慌性下跌后形成平台期的股票，寻找反弹机会",
          },
          {
            scenario: "寻找安记食品类似模式",
            value: "启用",
            explanation:
              "识别与安记食品类似的走势模式，即快速下跌后形成平台期，然后突破上涨",
          },
          {
            scenario: "不关注下跌速度",
            value: "禁用",
            explanation:
              "如果您只关心总体下跌幅度，不关注下跌速度，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "快速下跌通常伴随着成交量放大，是市场恐慌情绪的体现",
      "快速下跌后的平台期通常具有更好的上涨潜力，因为恐慌情绪已得到充分释放",
      "快速下跌时间窗口和幅度阈值的设置应根据市场整体环境和个股特性灵活调整",
      "与低位判断和箱体检测功能结合使用，可以更精确地识别高质量的底部平台期",
    ],
  },

  rapid_decline_days: {
    title: "快速下跌时间窗口详解",
    sections: [
      {
        title: "参数作用",
        content:
          "快速下跌时间窗口用于设置判断快速下跌的时间范围，以天为单位。系统会在这个时间窗口内寻找价格的最大下跌幅度，判断是否符合快速下跌的条件。",
      },
      {
        title: "如何设置合适的窗口？",
        content:
          "设置时需要考虑市场环境和个股特性。窗口太小可能无法捕捉到完整的下跌过程，窗口太大则可能包含非快速下跌的部分。",
        examples: [
          {
            scenario: "极短期下跌",
            value: "10-20",
            explanation: "适合识别极短期内的快速下跌，通常在市场恐慌时出现",
          },
          {
            scenario: "短期下跌",
            value: "20-30",
            explanation: "适合识别短期内的快速下跌，类似安记食品的下跌模式",
          },
          {
            scenario: "中期下跌",
            value: "30-60",
            explanation: "适合识别中期内的相对快速下跌，平衡速度和幅度",
          },
        ],
      },
    ],
    tips: [
      "安记食品的快速下跌发生在约30天的时间窗口内，可作为参考",
      "不同市场环境下，快速下跌的时间特征可能有所不同",
      "与快速下跌幅度阈值配合使用，可以更准确地识别快速下跌",
    ],
  },

  rapid_decline_threshold: {
    title: "快速下跌幅度阈值详解",
    sections: [
      {
        title: "参数作用",
        content:
          "快速下跌幅度阈值用于设置判断为快速下跌的最小下跌百分比。例如，设置为0.15表示在快速下跌时间窗口内，价格下跌至少15%才被视为快速下跌。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越大，要求下跌幅度越大，筛选越严格；阈值越小，允许下跌幅度较小，筛选越宽松。",
        examples: [
          {
            scenario: "小幅快速下跌",
            value: "0.1-0.15",
            explanation: "适合识别小幅但快速的下跌，在牛市调整中较常见",
          },
          {
            scenario: "中等快速下跌",
            value: "0.15-0.25",
            explanation: "适合识别中等幅度的快速下跌，类似安记食品的下跌模式",
          },
          {
            scenario: "大幅快速下跌",
            value: "0.25-0.4",
            explanation: "适合识别大幅快速下跌，通常在市场恐慌时出现",
          },
        ],
      },
    ],
    tips: [
      "快速下跌的幅度与市场环境和个股特性有关，应灵活调整阈值",
      "安记食品在30天窗口内的下跌幅度约为15-20%，可作为参考",
      "与快速下跌时间窗口配合使用，可以更准确地识别快速下跌",
    ],
  },

  // 突破确认参数
  use_breakthrough_confirmation: {
    title: "突破确认功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "突破确认功能用于分析突破后的价格走势，判断突破是否得到确认，避免假突破。真正的突破通常在突破后会持续上涨或至少保持突破价格，而假突破则会迅速回落。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您希望筛选出已经突破并得到确认的股票时，可以启用此功能。这对于避免假突破陷阱，提高交易成功率特别有帮助。",
        examples: [
          {
            scenario: "寻找确认突破",
            value: "启用",
            explanation: "筛选出突破已得到确认的股票，降低假突破风险",
          },
          {
            scenario: "关注潜在突破",
            value: "禁用",
            explanation:
              "如果您希望捕捉早期突破信号，不要求确认，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "突破确认通常需要1-3天时间，过长的确认期可能错过最佳买点",
      "成交量放大是突破确认的重要辅助指标，两者结合使用效果更佳",
      "不同市场环境下，突破确认的特征可能有所不同，需要灵活判断",
    ],
  },

  // 基本面筛选参数
  use_fundamental_filter: {
    title: "基本面筛选功能详解",
    sections: [
      {
        title: "功能作用",
        content:
          "基本面筛选功能通过分析股票的财务指标，筛选出基本面优秀的公司。它会分析营收增长率、净利润增长率、ROE、资产负债率、市盈率和市净率等关键指标，并与同行业公司进行对比，找出行业内基本面表现优异的股票。",
      },
      {
        title: "何时启用此功能？",
        content:
          "当您希望在技术分析的基础上，进一步考虑公司基本面质量时，可以启用此功能。这对于长期投资和价值投资特别有帮助，可以避免选中基本面较差的公司。",
        examples: [
          {
            scenario: "价值投资策略",
            value: "启用",
            explanation:
              "结合技术分析和基本面分析，筛选出基本面优秀的平台期股票",
          },
          {
            scenario: "纯技术分析策略",
            value: "禁用",
            explanation: "如果您只关注价格形态和技术指标，可以禁用此功能",
          },
        ],
      },
    ],
    tips: [
      "基本面筛选会显著减少符合条件的股票数量，但可以提高选股质量",
      "基本面分析与技术分析结合使用，可以提高投资成功率",
      "不同行业的基本面特征有很大差异，系统会自动进行行业内对比",
      "基本面筛选特别适合寻找长期投资标的，而非短期交易机会",
    ],
  },

  revenue_growth_percentile: {
    title: "营收增长率百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "营收增长率百分位用于设置对公司营收增长的要求。它表示公司营收增长率在行业内的最低百分位要求。例如，设置为0.3表示要求公司营收增长率至少位于行业前30%。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越小，要求营收增长越快，筛选越严格；阈值越大，允许营收增长较慢，筛选越宽松。",
        examples: [
          {
            scenario: "高增长要求",
            value: "0.1-0.2",
            explanation: "要求营收增长位于行业前10-20%，适合寻找高增长公司",
          },
          {
            scenario: "中等增长要求",
            value: "0.3-0.4",
            explanation: "要求营收增长位于行业前30-40%，平衡增长性和数量",
          },
          {
            scenario: "宽松增长要求",
            value: "0.5-0.6",
            explanation: "要求营收增长位于行业前50-60%，适合在低增长环境中使用",
          },
        ],
      },
    ],
    tips: [
      "营收增长是公司发展的基础，通常是最重要的基本面指标之一",
      "不同行业的增长特性不同，系统会自动进行行业内对比",
      "经济周期不同阶段，可能需要调整阈值，经济下行期可适当放宽要求",
    ],
  },

  profit_growth_percentile: {
    title: "净利润增长率百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "净利润增长率百分位用于设置对公司盈利能力增长的要求。它表示公司净利润增长率在行业内的最低百分位要求。例如，设置为0.3表示要求公司净利润增长率至少位于行业前30%。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越小，要求净利润增长越快，筛选越严格；阈值越大，允许净利润增长较慢，筛选越宽松。",
        examples: [
          {
            scenario: "高盈利增长要求",
            value: "0.1-0.2",
            explanation:
              "要求净利润增长位于行业前10-20%，适合寻找高盈利增长公司",
          },
          {
            scenario: "中等盈利增长要求",
            value: "0.3-0.4",
            explanation: "要求净利润增长位于行业前30-40%，平衡盈利增长性和数量",
          },
          {
            scenario: "宽松盈利增长要求",
            value: "0.5-0.6",
            explanation:
              "要求净利润增长位于行业前50-60%，适合在低盈利环境中使用",
          },
        ],
      },
    ],
    tips: [
      "净利润增长反映公司盈利能力的提升，是重要的基本面指标",
      "净利润增长应与营收增长相匹配，两者配合使用效果更佳",
      "关注净利润增长的持续性和稳定性，避免一次性因素导致的增长",
    ],
  },

  roe_percentile: {
    title: "ROE百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "ROE（净资产收益率）百分位用于设置对公司盈利能力的要求。它表示公司ROE在行业内的最低百分位要求。例如，设置为0.3表示要求公司ROE至少位于行业前30%。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越小，要求ROE越高，筛选越严格；阈值越大，允许ROE较低，筛选越宽松。",
        examples: [
          {
            scenario: "高ROE要求",
            value: "0.1-0.2",
            explanation: "要求ROE位于行业前10-20%，适合寻找高盈利能力公司",
          },
          {
            scenario: "中等ROE要求",
            value: "0.3-0.4",
            explanation: "要求ROE位于行业前30-40%，平衡盈利能力和数量",
          },
          {
            scenario: "宽松ROE要求",
            value: "0.5-0.6",
            explanation: "要求ROE位于行业前50-60%，适合在低盈利环境中使用",
          },
        ],
      },
    ],
    tips: [
      "ROE是衡量公司盈利能力和资本使用效率的重要指标",
      "不同行业的ROE水平差异很大，系统会自动进行行业内对比",
      "关注ROE的持续性和稳定性，避免一次性因素导致的高ROE",
    ],
  },

  liability_percentile: {
    title: "资产负债率百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "资产负债率百分位用于设置对公司财务安全性的要求。它表示公司资产负债率在行业内的最高百分位要求。例如，设置为0.3表示要求公司资产负债率至少位于行业后30%（即较低的负债水平）。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡严格度和筛选结果数量。阈值越小，要求资产负债率越低，筛选越严格；阈值越大，允许资产负债率较高，筛选越宽松。",
        examples: [
          {
            scenario: "低负债要求",
            value: "0.1-0.2",
            explanation:
              "要求资产负债率位于行业后10-20%，适合寻找财务稳健的公司",
          },
          {
            scenario: "中等负债要求",
            value: "0.3-0.4",
            explanation: "要求资产负债率位于行业后30-40%，平衡财务安全性和数量",
          },
          {
            scenario: "宽松负债要求",
            value: "0.5-0.6",
            explanation:
              "要求资产负债率位于行业后50-60%，适合在高杠杆行业中使用",
          },
        ],
      },
    ],
    tips: [
      "资产负债率反映公司的财务风险，较低的负债率通常意味着更高的安全性",
      "不同行业的合理负债水平差异很大，系统会自动进行行业内对比",
      "某些行业（如银行、地产）天然具有较高的负债率，应结合行业特性判断",
    ],
  },

  pe_percentile: {
    title: "PE百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "PE（市盈率）百分位用于设置对公司估值的要求。它表示公司PE在行业内的最低百分位要求。例如，设置为0.7表示要求公司PE至少位于行业后70%（即较低的估值水平）。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡估值要求和筛选结果数量。阈值越大，允许更低的PE估值，筛选越严格；阈值越小，允许更高的PE估值，筛选越宽松。",
        examples: [
          {
            scenario: "低估值要求",
            value: "0.8-0.9",
            explanation: "要求PE位于行业后10-20%，适合寻找严重低估的公司",
          },
          {
            scenario: "中等估值要求",
            value: "0.6-0.7",
            explanation: "要求PE位于行业后30-40%，平衡估值和数量",
          },
          {
            scenario: "宽松估值要求",
            value: "0.4-0.5",
            explanation: "要求PE位于行业后50-60%，适合在高估值环境中使用",
          },
        ],
      },
    ],
    tips: [
      "PE是最常用的估值指标，较低的PE通常意味着更高的投资价值",
      "不同行业的合理PE水平差异很大，系统会自动进行行业内对比",
      "高增长公司通常具有较高的PE，应结合增长性综合判断",
    ],
  },

  pb_percentile: {
    title: "PB百分位详解",
    sections: [
      {
        title: "参数作用",
        content:
          "PB（市净率）百分位用于设置对公司估值的要求。它表示公司PB在行业内的最低百分位要求。例如，设置为0.7表示要求公司PB至少位于行业后70%（即较低的估值水平）。",
      },
      {
        title: "如何设置合适的阈值？",
        content:
          "设置时需要平衡估值要求和筛选结果数量。阈值越大，允许更低的PB估值，筛选越严格；阈值越小，允许更高的PB估值，筛选越宽松。",
        examples: [
          {
            scenario: "低估值要求",
            value: "0.8-0.9",
            explanation: "要求PB位于行业后10-20%，适合寻找严重低估的公司",
          },
          {
            scenario: "中等估值要求",
            value: "0.6-0.7",
            explanation: "要求PB位于行业后30-40%，平衡估值和数量",
          },
          {
            scenario: "宽松估值要求",
            value: "0.4-0.5",
            explanation: "要求PB位于行业后50-60%，适合在高估值环境中使用",
          },
        ],
      },
    ],
    tips: [
      "PB是重要的估值指标，特别适用于评估资产密集型行业的公司",
      "不同行业的合理PB水平差异很大，系统会自动进行行业内对比",
      "高ROE公司通常具有较高的PB，应结合ROE综合判断",
    ],
  },

  fundamental_years_to_check: {
    title: "检查年数详解",
    sections: [
      {
        title: "参数作用",
        content:
          "检查年数用于设置分析公司财务指标的历史年限。它表示系统会检查公司过去多少年的财务数据，要求指标在这段时间内保持连续增长或稳定。",
      },
      {
        title: "如何设置合适的年数？",
        content:
          "设置时需要平衡历史一致性要求和筛选结果数量。年数越多，要求历史表现越稳定，筛选越严格；年数越少，对历史表现要求越宽松，筛选越宽松。",
        examples: [
          {
            scenario: "长期稳定性要求",
            value: "5",
            explanation: "要求5年连续的良好表现，适合寻找长期稳定增长的公司",
          },
          {
            scenario: "中期稳定性要求",
            value: "3",
            explanation: "要求3年连续的良好表现，平衡稳定性和数量",
          },
          {
            scenario: "短期表现要求",
            value: "2",
            explanation: "仅要求2年的良好表现，适合在经济转型期使用",
          },
        ],
      },
    ],
    tips: [
      "连续多年的良好表现通常表明公司具有持续的竞争优势",
      "经济周期不同阶段，可能需要调整年数要求",
      "某些新兴行业或成长型公司可能没有很长的历史数据，可适当降低年数要求",
    ],
  },

  breakthrough_confirmation_days: {
    title: "确认天数详解",
    sections: [
      {
        title: "参数作用",
        content:
          "确认天数用于设置判断突破确认所需的交易日数量。例如，设置为1表示需要突破后的第二个交易日保持在突破价格之上，才认为突破得到确认。",
      },
      {
        title: "如何设置合适的天数？",
        content:
          "设置时需要平衡确认的可靠性和及时性。天数越多，确认越可靠但可能错过部分上涨；天数越少，确认越及时但可能包含更多假突破。",
        examples: [
          {
            scenario: "快速确认",
            value: "1",
            explanation: "要求突破后第二天确认，适合快速交易",
          },
          {
            scenario: "标准确认",
            value: "2",
            explanation: "要求突破后连续两天确认，平衡可靠性和及时性",
          },
          {
            scenario: "严格确认",
            value: "3-5",
            explanation: "要求突破后连续多天确认，提高可靠性",
          },
        ],
      },
    ],
    tips: [
      "市场环境会影响确认所需的时间，震荡市场可能需要更长的确认期",
      "与成交量分析结合使用，可以提高突破确认的准确性",
      "不同股票的突破特性不同，可根据个股历史表现调整确认天数",
    ],
  },
};
