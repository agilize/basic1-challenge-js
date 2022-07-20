class Main {

  /**
   * Ct - o horário atual (currentTime)
   * dist - distância
   * calcTrip - calcula a tarifa de um uber
   * @param $ct
   * @param $dist
   * @return float|int
   */
  calTrip(ct, dist) {
    if (ct instanceof Date) {
      // overnight
      if (ct.getHours() > 22 || ct.getHours() < 6) {
        // valor overnight
        return dist * 3.9
      } else {
        //é domingo
        if (ct.getDay() == 0) {
          return dist * 3
        } else {
          //valor normal
          return dist * 2.1
        }
      }
    } else {
      // nenhuma data informada
      return -1;
    }
  }
}
