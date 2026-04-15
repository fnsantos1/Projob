import { describe, test, expect, beforeEach, afterEach, jest } from '@jest/globals'
import { hometheater, luzdeambiente, playerdemidia, projetor, receiver, sistemadesom, tv } from "./facade"

describe('HomeTheater Facade', () => {
    let homeTheater: hometheater
    let mockTv: tv
    let mockProjetor: projetor
    let mockReceiver: receiver
    let mockPlayer: playerdemidia
    let mockSom: sistemadesom
    let mockLuz: luzdeambiente

    beforeEach(() => {
        mockTv = new tv()
        mockProjetor = new projetor()
        mockReceiver = new receiver()
        mockPlayer = new playerdemidia()
        mockSom = new sistemadesom()
        mockLuz = new luzdeambiente()

        homeTheater = new hometheater(
            mockTv,
            mockProjetor,
            mockReceiver,
            mockPlayer,
            mockSom,
            mockLuz
        )

        const devices = [mockTv, mockProjetor, mockReceiver, mockPlayer, mockSom, mockLuz]

        devices.forEach(d => {
            jest.spyOn(d, 'ligar')
            jest.spyOn(d, 'desligar')
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('deve ligar os dispositivos corretos ao assistir filme', () => {
        homeTheater.assistirfilme()

        expect(mockTv.ligar).toHaveBeenCalled()
        expect(mockProjetor.ligar).toHaveBeenCalled()
        expect(mockReceiver.ligar).toHaveBeenCalled()
        expect(mockPlayer.ligar).toHaveBeenCalled()
        expect(mockSom.ligar).toHaveBeenCalled()
        expect(mockLuz.ligar).not.toHaveBeenCalled()
    })

    test('deve ligar apenas dispositivos de áudio e luz ao ouvir música', () => {
        homeTheater.ouvirmusica()

        expect(mockReceiver.ligar).toHaveBeenCalled()
        expect(mockPlayer.ligar).toHaveBeenCalled()
        expect(mockSom.ligar).toHaveBeenCalled()
        expect(mockLuz.ligar).toHaveBeenCalled()
        expect(mockTv.ligar).not.toHaveBeenCalled()
        expect(mockProjetor.ligar).not.toHaveBeenCalled()
    })

    test('deve desligar absolutamente todos os dispositivos', () => {
        homeTheater.desligar()
        expect(mockTv.desligar).toHaveBeenCalled()
        expect(mockProjetor.desligar).toHaveBeenCalled()
        expect(mockReceiver.desligar).toHaveBeenCalled()
        expect(mockPlayer.desligar).toHaveBeenCalled()
        expect(mockSom.desligar).toHaveBeenCalled()
        expect(mockLuz.desligar).toHaveBeenCalled()
    })
})