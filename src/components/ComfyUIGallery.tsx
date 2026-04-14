import { useState, useEffect } from 'react';
import { comfyService, type ComfyModel, type GenerationResult } from '../services/comfyService';
import { Image, Loader2, AlertCircle, Check, Wand2 } from 'lucide-react';

interface ComfyUIGalleryProps {
  roomId: string;
  roomName: string;
  onClose: () => void;
}

export default function ComfyUIGallery({ roomId, roomName, onClose }: ComfyUIGalleryProps) {
  const [models, setModels] = useState<ComfyModel[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GenerationResult[]>([]);
  const [, setSelectedModel] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'room' | 'character'>('room');

  // Connect to ComfyUI and load models
  useEffect(() => {
    connectToComfyUI();
  }, []);

  const connectToComfyUI = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const availableModels = await comfyService.refreshModels();
      setModels(availableModels);
      setIsConnected(true);
      
      // Auto-select first checkpoint
      const firstCheckpoint = availableModels.find(m => m.type === 'checkpoint');
      if (firstCheckpoint) {
        setSelectedModel(firstCheckpoint.name);
      }
    } catch (err) {
      setError('Cannot connect to ComfyUI. Make sure it\'s running on http://127.0.0.1:8188');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const generateRoom = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await comfyService.generateRoom(roomId);
      setGeneratedImages(prev => [result, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const generateCharacter = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await comfyService.generateCatCharacter('barista', 'happy', roomId);
      setGeneratedImages(prev => [result, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-palace-bg/95 backdrop-blur-md flex items-center justify-center p-6">
      <div className="max-w-4xl w-full max-h-[90vh] bg-palace-bg border-2 border-palace-gold/30 rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-palace-text/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-palace-gold/20 flex items-center justify-center">
              <Image className="w-5 h-5 text-palace-gold" />
            </div>
            <div>
              <h2 className="font-cinzel text-xl text-palace-text">ComfyUI Gallery</h2>
              <p className="text-palace-text/60 text-sm">{roomName}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Connection Status */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
              isConnected ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
            }`}>
              {isConnected ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
            
            <button 
              onClick={onClose}
              className="p-2 hover:bg-palace-text/10 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {!isConnected ? (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-palace-text/30 mx-auto mb-4" />
              <h3 className="font-cinzel text-xl text-palace-text mb-2">Not Connected</h3>
              <p className="text-palace-text/60 mb-6 max-w-md mx-auto">
                Make sure ComfyUI is running locally on http://127.0.0.1:8188
              </p>
              <button
                onClick={connectToComfyUI}
                disabled={isLoading}
                className="px-6 py-3 bg-palace-gold text-palace-bg rounded-xl font-cinzel hover:bg-palace-text transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin inline" /> : 'Connect'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('room')}
                  className={`flex-1 py-3 rounded-xl font-cinzel transition-colors ${
                    activeTab === 'room'
                      ? 'bg-palace-gold text-palace-bg'
                      : 'bg-palace-text/10 text-palace-text hover:bg-palace-text/20'
                  }`}
                >
                  🏛️ Room Interiors
                </button>
                <button
                  onClick={() => setActiveTab('character')}
                  className={`flex-1 py-3 rounded-xl font-cinzel transition-colors ${
                    activeTab === 'character'
                      ? 'bg-palace-gold text-palace-bg'
                      : 'bg-palace-text/10 text-palace-text hover:bg-palace-text/20'
                  }`}
                >
                  🐱 Cat Characters
                </button>
              </div>

              {/* Generation Controls */}
              <div className="p-4 rounded-xl bg-palace-text/5 border border-palace-text/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-cinzel text-palace-text">
                      {activeTab === 'room' ? 'Generate Room' : 'Generate Character'}
                    </h4>
                    <p className="text-palace-text/60 text-sm">
                      {activeTab === 'room' 
                        ? `Create Italian ${roomName} interior`
                        : 'Create anthropomorphic cat NPC'}
                    </p>
                  </div>
                  <button
                    onClick={activeTab === 'room' ? generateRoom : generateCharacter}
                    disabled={isLoading}
                    className="px-6 py-3 bg-palace-gold text-palace-bg rounded-xl font-cinzel hover:bg-palace-text transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Wand2 className="w-5 h-5" />
                    )}
                    Generate
                  </button>
                </div>

                {/* Model Info */}
                {models.length > 0 && (
                  <div className="text-sm text-palace-text/60">
                    Available models: {models.filter(m => m.type === 'checkpoint').length} checkpoints, 
                    {models.filter(m => m.type === 'lora').length} LoRAs
                  </div>
                )}
              </div>

              {/* Error Display */}
              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                  {error}
                </div>
              )}

              {/* Generated Images Grid */}
              {generatedImages.length > 0 && (
                <div>
                  <h4 className="font-cinzel text-palace-text mb-4">Generated Images</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {generatedImages.map((img, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden border border-palace-text/20">
                        <img 
                          src={img.imageUrl} 
                          alt={`Generated ${i}`}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => window.open(img.imageUrl, '_blank')}
                            className="px-4 py-2 bg-palace-gold text-palace-bg rounded-lg font-cinzel"
                          >
                            View Full
                          </button>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-xs">
                          {img.filename.slice(0, 30)}...
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {generatedImages.length === 0 && !isLoading && (
                <div className="text-center py-12 text-palace-text/40">
                  <Image className="w-16 h-16 mx-auto mb-4" />
                  <p>No images generated yet</p>
                  <p className="text-sm">Click Generate to create visuals</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
