document.addEventListener("DOMContentLoaded", function () {
    // Dados fictícios para os gráficos
    const currentData = {
        labels: ["Cozinha", "Sala", "Quarto", "Banheiro", "Outros"],
        series: [120, 350, 200, 100, 150],
    };

    const historicalData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        series: [[150, 200, 180, 250, 300, 280]],
    };

    // Criação do gráfico de consumo atual
    new ApexCharts(document.querySelector("#current-chart"), {
        chart: {
            type: "pie",
        },
        labels: currentData.labels,
        series: currentData.series,
    }).render();

    // Criação do gráfico de histórico de consumo
    new ApexCharts(document.querySelector("#historical-chart"), {
        chart: {
            type: "line",
        },
        xaxis: {
            categories: historicalData.labels,
        },
        series: [
            {
                name: "Consumo",
                data: historicalData.series[0],
            },
        ],
    }).render();

    // Criação do gráfico de comparação
    new ApexCharts(document.querySelector("#comparison-chart"), {
        chart: {
            type: "bar",
        },
        xaxis: {
            categories: currentData.labels,
        },
        series: [
            {
                name: "Atual",
                data: currentData.series,
            },
            {
                name: "Histórico",
                data: historicalData.series[0],
            },
        ],
    }).render();
});
